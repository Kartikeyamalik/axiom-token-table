'use client'
import { FallbackProps } from 'react-error-boundary'

export function ErrorPanel({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4">
      <div className="font-semibold">Something went wrong</div>
      <div className="text-sm opacity-80 mt-1">{String(error?.message || error)}</div>
      <button onClick={resetErrorBoundary} className="btn mt-3">Retry</button>
    </div>
  )
}
