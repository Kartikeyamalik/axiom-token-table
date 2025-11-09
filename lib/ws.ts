import { QueryClient } from '@tanstack/react-query'
import type { Token } from '@/types/token'

type Listener = (t: Partial<Token> & { id: string }) => void

class MockSocket {
  listeners = new Set<Listener>()
  interval?: ReturnType<typeof setInterval>

  start() {
    if (this.interval) return
    this.interval = setInterval(() => {
      // Random token id 1-6
      const id = String(Math.floor(Math.random() * 6) + 1)
      const priceDelta = (Math.random() - 0.5) * 0.03 // ±3%
      const changeDelta = (Math.random() - 0.5) * 1.2 // ±1.2%
      this.listeners.forEach(l => l({ id, price: priceDelta, change24h: changeDelta }))
    }, 900)
  }
  stop() {
    if (this.interval) clearInterval(this.interval)
    this.interval = undefined
  }
  on(cb: Listener) {
  this.listeners.add(cb);
  return () => { this.listeners.delete(cb); }; // return void, not boolean
}

}

export const socket = new MockSocket()

export function wireSocket(queryClient: QueryClient) {
  socket.start();
  const off = socket.on((patch) => {
    queryClient.setQueryData<Token[]>(['tokens'], (prev) => {
      if (!prev) return prev;
      return prev.map(t => {
        if (t.id !== patch.id) return t;
        const newPrice = Math.max(0.0000001, t.price * (1 + (patch.price ?? 0)));
        const newChange = t.change24h + (patch.change24h ?? 0);
        return { ...t, price: newPrice, change24h: newChange };
      });
    });
  });
  return () => { off(); }; // explicit void cleanup
}

