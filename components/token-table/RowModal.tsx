'use client'
import * as Dialog from '@radix-ui/react-dialog'

export function RowModal({ trigger, title, children }:{ trigger: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed inset-x-0 top-24 mx-auto w-[90%] max-w-xl rounded-2xl border border-border bg-card p-4 shadow-soft">
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
          <div className="mt-3">{children}</div>
          <div className="mt-4 flex justify-end">
            <Dialog.Close className="btn">Close</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
