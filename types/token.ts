export type TabKey = 'new' | 'final' | 'migrated'

export interface Token {
  id: string
  symbol: string
  name: string
  chain: 'ETH' | 'SOL' | 'BSC'
  price: number
  change24h: number
  liquidity: number
  volume24h: number
  tab: TabKey
}
