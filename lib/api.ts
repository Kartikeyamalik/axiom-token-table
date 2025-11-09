import { seed } from './mockData'
import type { Token } from '@/types/token'

export async function fetchTokens(): Promise<Token[]> {
  // Progressive loading simulation
  await new Promise(r => setTimeout(r, 600))
  return seed
}
