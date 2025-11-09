'use client'
import { memo, useEffect, useRef, useState } from 'react'
import { fmt } from '@/lib/format'
import { RowTooltip } from './RowTooltip'
import { RowPopover } from './RowPopover'
import { RowModal } from './RowModal'
import type { Token } from '@/types/token'

function usePriceFlash(price: number) {
  const prev = useRef(price)
  const [klass, setKlass] = useState('')
  useEffect(() => {
    if (price === prev.current) return
    const up = price > prev.current
    setKlass(up ? 'price-up' : 'price-down')
    const id = setTimeout(() => setKlass(''), 600)
    prev.current = price
    return () => clearTimeout(id)
  }, [price])
  return klass
}

function ChainBadge({ chain }: { chain: Token['chain'] }) {
  const text = chain
  return <span className="rounded-md border border-border px-1.5 py-0.5 text-[11px] text-gray-400">{text}</span>
}

function _TokenRow({ t }: { t: Token }) {
  const priceKlass = usePriceFlash(t.price)

  return (
    <tr className="border-b border-border/70 hover:bg-white/5 transition">
      <td className="px-3 py-3 token-col">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm">{t.symbol[0]}</div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate font-medium">{t.symbol}</span>
              <ChainBadge chain={t.chain} />
            </div>
            <div className="text-xs text-gray-400 truncate">{t.name}</div>
          </div>
        </div>
      </td>
      <td className={`px-3 py-3 price-col ${priceKlass}`}>
        {fmt.currency(t.price)}
      </td>
      <td className="px-3 py-3 change-col">
        <span className={t.change24h >= 0 ? 'text-gain' : 'text-loss'}>{fmt.pct(t.change24h)}</span>
      </td>
      <td className="px-3 py-3 liq-col">{fmt.currency(t.liquidity)}</td>
      <td className="px-3 py-3 vol-col">{fmt.currency(t.volume24h)}</td>
      <td className="px-3 py-3 w-16">
        <div className="flex gap-2">
          <RowTooltip tip="Quick pair details">
            <RowPopover content={<div className="text-sm">
              <div><strong>{t.symbol}</strong> · {t.name}</div>
              <div className="opacity-80">Chain: {t.chain}</div>
              <div className="opacity-80">Liquidity: {fmt.currency(t.liquidity)}</div>
              <div className="opacity-80">Volume 24h: {fmt.currency(t.volume24h)}</div>
            </div>} />
          </RowTooltip>

          <RowModal
            title={`${t.symbol} · Actions`}
            trigger={<button className="btn-ghost btn text-sm">Trade</button>}
          >
            <p className="text-sm opacity-90">
              This is a demo modal. In the real app, deep-link to trading pairs.
            </p>
            <div className="mt-3 flex gap-2">
              <button className="btn">Buy</button>
              <button className="btn">Sell</button>
              <button className="btn-ghost">Add to Watchlist</button>
            </div>
          </RowModal>
        </div>
      </td>
    </tr>
  )
}

export const TokenRow = memo(_TokenRow)
