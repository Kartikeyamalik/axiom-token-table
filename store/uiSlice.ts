import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TabKey = 'new' | 'final' | 'migrated'
type SortKey = 'token' | 'price' | 'change' | 'liquidity' | 'volume'
type SortDir = 'asc' | 'desc'

interface UIState {
  activeTab: TabKey
  sortKey: SortKey
  sortDir: SortDir
}

const initialState: UIState = {
  activeTab: 'new',
  sortKey: 'volume',
  sortDir: 'desc'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<TabKey>) {
      state.activeTab = action.payload
    },
    setSort(state, action: PayloadAction<{ key: SortKey }>) {
      const key = action.payload.key
      if (state.sortKey === key) {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc'
      } else {
        state.sortKey = key
        state.sortDir = 'desc'
      }
    }
  }
})

export const { setActiveTab, setSort } = uiSlice.actions
export default uiSlice.reducer
export type { TabKey, SortKey, SortDir }
