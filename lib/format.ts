export const fmt = {
  currency(n: number) {
    return n >= 1 ? `$${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
                  : `$${n.toFixed(6)}`
  },
  pct(n: number) {
    return `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`
  },
  compact(n: number) {
    return Intl.NumberFormat(undefined, { notation: 'compact' }).format(n)
  }
}
