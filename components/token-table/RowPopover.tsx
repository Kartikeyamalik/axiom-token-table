'use client'
import * as Popover from '@radix-ui/react-popover'

export function RowPopover({ content }: { content: React.ReactNode }) {
  return (
    <Popover.Root>
      <Popover.Trigger className="btn-ghost btn text-sm">Pair</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="rounded-xl border border-border bg-card p-3 shadow-soft w-64">
          {content}
          <Popover.Arrow className="fill-card" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
