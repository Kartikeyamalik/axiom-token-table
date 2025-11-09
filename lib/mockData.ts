import { Token } from '@/types/token'

export const seed: Token[] = [
  { id: '1', symbol: 'AXM', name: 'Axiom', chain: 'ETH', price: 1.23, change24h: 3.2, liquidity: 523000, volume24h: 1320000, tab: 'new' },
  { id: '2', symbol: 'PULSE', name: 'Pulse', chain: 'SOL', price: 0.034, change24h: -1.4, liquidity: 231000, volume24h: 420000, tab: 'new' },
  { id: '3', symbol: 'MIG', name: 'Migrator', chain: 'ETH', price: 0.92, change24h: 12.5, liquidity: 312000, volume24h: 810000, tab: 'migrated' },
  { id: '4', symbol: 'FST', name: 'FinalStretch', chain: 'BSC', price: 0.12, change24h: -6.8, liquidity: 122000, volume24h: 210000, tab: 'final' },
  { id: '5', symbol: 'SOLX', name: 'Sol Nexus', chain: 'SOL', price: 2.12, change24h: 1.2, liquidity: 990000, volume24h: 3210000, tab: 'final' },
  { id: '6', symbol: 'ETHX', name: 'EtherX', chain: 'ETH', price: 12.31, change24h: 0.7, liquidity: 2123000, volume24h: 9321000, tab: 'new' }
]
