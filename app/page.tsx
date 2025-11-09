'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setActiveTab } from '@/store/uiSlice'
import { TokenTable } from '@/components/token-table/TokenTable'
import { Suspense } from 'react'
import { TableSkeleton } from '@/components/token-table/TableSkeleton'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorPanel } from '@/components/ui/ErrorPanel'

const tabs = [
  { key: 'new', label: 'New Pairs' },
  { key: 'final', label: 'Final Stretch' },
  { key: 'migrated', label: 'Migrated' }
] as const

export default function Page() {
  const dispatch = useAppDispatch()
  const activeTab = useAppSelector(s => s.ui.activeTab)

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <header className="mb-6 flex items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Token Discovery</h1>
        <div className="flex gap-2">
          <button className="btn-ghost btn">Docs</button>
          <button className="btn">Launch App</button>
        </div>
      </header>

      <nav className="mb-4 flex w-full overflow-x-auto gap-2">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => dispatch(setActiveTab(t.key))}
            className={`btn ${activeTab === t.key ? 'bg-white/10' : 'btn-ghost'}`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <ErrorBoundary FallbackComponent={ErrorPanel}>
        <Suspense fallback={<TableSkeleton rows={10} />}>
          <TokenTable />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
