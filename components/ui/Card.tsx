import { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card shadow-soft ${className}`}>{children}</div>
}
export function CardHeader({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`px-4 py-3 border-b border-border ${className}`}>{children}</div>
}
export function CardBody({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`px-2 md:px-4 py-2 ${className}`}>{children}</div>
}
