'use client'

import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { useAppSelector } from '@/store/hooks'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTokens } from '@/lib/api'
import { wireSocket } from '@/lib/ws'
import { useEffect, useMemo } from 'react'
import { TableHeader } from './TableHeader'
import { TokenRow } from './TokenRow'
import type { Token } from '@/types/token'

function useSocketUpdates() {
  const qc = useQueryClient()
  useEffect(() => {
    const off = wireSocket(qc)
    return off
  }, [qc])
}

export function TokenTable() {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['tokens'], queryFn: fetchTokens, suspense: true })
  useSocketUpdates()

  const tab = useAppSelector(s => s.ui.activeTab)
  const sortKey = useAppSelector(s => s.ui.sortKey)
  const sortDir = useAppSelector(s => s.ui.sortDir)

  const filtered = useMemo(() => {
    const arr = (data ?? []).filter(t => t.tab === tab)
    const sorted = [...arr].sort((a, b) => {
      const key = sortKey
      const dir = sortDir === 'asc' ? 1 : -1
      const av = key === 'token' ? a.symbol.localeCompare(b.symbol) :
                 key === 'price' ? a.price - b.price :
                 key === 'change' ? a.change24h - b.change24h :
                 key === 'liquidity' ? a.liquidity - b.liquidity :
                 a.volume24h - b.volume24h
      return av * dir
    })
    return sorted
  }, [data, tab, sortKey, sortDir])

  if (isError) throw error

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">Live markets · {tab}</div>
          <div className="flex gap-2">
            <button className="btn-ghost btn text-sm">Watchlist</button>
            <button className="btn-ghost btn text-sm">Filters</button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-auto">
          <table className="w-full table-fixed">
            <TableHeader />
            <tbody>
              {filtered.map(t => <TokenRow key={t.id} t={t} />)}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="p-6 text-center text-sm text-gray-400">No pairs under this tab.</div>
          )}
        </div>
      </CardBody>
    </Card>
  )
}
