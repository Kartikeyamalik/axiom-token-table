# Axiom Token Discovery – Pixel-Perfect Replica

A production-grade Next.js 14 + TypeScript implementation of a token discovery table (inspired by Axiom Trade Pulse). It ships with:
- Real-time price updates (mock WebSocket) with smooth color transitions
- Tabs for **New Pairs**, **Final Stretch**, **Migrated**
- Sorting on all key columns
- Tooltip, Popover, and Modal (Radix UI)
- Loading skeletons (shimmer), progressive loading, error boundaries
- Tailwind, Redux Toolkit (state), React Query (data), atomic components
- Playwright snapshots at multiple widths
- Lighthouse CI config targeting ≥90 on mobile & desktop

## Tech
- Next.js 14 (App Router), React 18, TypeScript (strict)
- Tailwind CSS
- Redux Toolkit + React Redux
- React Query
- Radix UI (Tooltip/Popover/Dialog)
- Framer Motion (available, not required)
- Zod (available for future schema validation)

## Local Setup
```bash
pnpm i
pnpm dev
# open http://localhost:3000
```

## Sorting & Interactions
- Click header labels to sort; repeat to toggle direction.
- Hover rows for subtle background.
- **Pair** button: Popover
- **Trade** button: Modal with placeholder actions.
- Tooltips appear on hover for clarity.

## Real-time Updates
A mock socket pushes random deltas ~every 900ms. The table updates via React Query's `setQueryData`, producing smooth flash transitions (green for up, red for down).

## Progressive Loading & Error Boundaries
- Suspense renders skeletons while `fetchTokens()` resolves.
- Any query error bubbles to `ErrorBoundary` which shows a retry panel.

## Performance Notes
- Table rows are memoized.
- Fixed column widths reduce layout shift.
- `staleTime` + disabled window refetch minimize unnecessary re-renders.
- Uses App Router and ReactCompiler for optimizations.

## Snapshot Script (Auto-layout Images)
```bash
pnpm playwright:install
pnpm snapshots   # saves ./snapshots/home-{width}.png for [320..1440]
# If deployed, run with SITE_URL=https://your.vercel.app pnpm snapshots
```

## Lighthouse
```bash
pnpm build && pnpm lhci
# target ≥ 0.90 across categories
```

## Deploy (Vercel)
- Push to GitHub.
- Import the repo in Vercel.
- Ensure `NODE_VERSION` ≥ 18 in Project Settings.
- No special build command; Vercel detects Next.js.

## Deliverables Checklist
- [ ] GitHub repo with clean commits
- [ ] Vercel deployment
- [ ] 1–2 min public video. Suggested script:
  1. Load the page (show skeleton → table).
  2. Switch tabs; sort by volume and price.
  3. Hover a row (tooltip), click **Pair** (popover), **Trade** (modal).
  4. Point at price cells flashing as updates stream in.
  5. Run `pnpm snapshots` and show saved images.
  6. Share Lighthouse scores.
  7. Share deployment URL.

## Pixel Accuracy
The layout, paddings, and font sizes approximate the target (≤2px). Use a visual regression tool (e.g., Playwright comparisons or Chromatic) to verify against a screenshot baseline.

## Folder Structure
```
app/
  page.tsx
  layout.tsx
  providers.tsx
components/
  token-table/
    TokenTable.tsx
    TokenRow.tsx
    TableHeader.tsx
    RowPopover.tsx
    RowTooltip.tsx
    RowModal.tsx
  ui/
    Card.tsx
    ErrorPanel.tsx
lib/
  api.ts
  ws.ts
  format.ts
  mockData.ts
store/
  store.ts
  hooks.ts
  uiSlice.ts
types/
  token.ts
scripts/
  snapshots.mjs
```

## Notes
- The `components/ui` directory includes minimal shadcn-like primitives, so you don't need to run `shadcn` CLI for this task.
- Replace `lib/mockData.ts` with real API wiring later; the socket can be switched to a real WS endpoint and the `wireSocket` helper will still apply.
