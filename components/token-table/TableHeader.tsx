'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSort } from '@/store/uiSlice'

export function TableHeader() {
  const dispatch = useAppDispatch()
  const sortKey = useAppSelector(s => s.ui.sortKey)
  const sortDir = useAppSelector(s => s.ui.sortDir)

  const Col = ({ k, label, className = '' }:{ k: any, label: string, className?: string }) => (
    <th className={`px-3 py-2 text-left text-xs uppercase tracking-wide text-gray-400 ${className}`}>
      <button
        className="inline-flex items-center gap-1 hover:text-gray-200"
        onClick={() => dispatch(setSort({ key: k }))}
        aria-label={`Sort by ${label}`}
      >
        <span>{label}</span>
        <span className="text-[10px] opacity-60">
          {sortKey === k ? (sortDir === 'asc' ? '▲' : '▼') : ''}
        </span>
      </button>
    </th>
  )

  return (
    <thead className="sticky top-0 z-10 bg-card/80 backdrop-blur">
      <tr>
        <Col k="token" label="Token" className="token-col" />
        <Col k="price" label="Price" className="price-col" />
        <Col k="change" label="24h" className="change-col" />
        <Col k="liquidity" label="Liquidity" className="liq-col" />
        <Col k="volume" label="Volume 24h" className="vol-col" />
        <th className="px-3 py-2 w-16 text-xs uppercase tracking-wide text-gray-400">Info</th>
      </tr>
    </thead>
  )
}
