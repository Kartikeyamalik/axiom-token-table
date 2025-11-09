'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

export function RowTooltip({ children, tip }:{ children: ReactNode, tip: string }) {
  return (
    <Tooltip.Root delayDuration={150}>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="rounded-md bg-black/80 px-2 py-1 text-xs text-white shadow-soft">
          {tip}
          <Tooltip.Arrow className="fill-black/80" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
