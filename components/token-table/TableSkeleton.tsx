import { Card, CardBody, CardHeader } from '@/components/ui/Card'

export function TableSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <Card>
      <CardHeader>
        <div className="h-6 w-40 skeleton rounded-md" />
      </CardHeader>
      <CardBody>
        <div className="overflow-auto">
          <table className="w-full">
            <tbody>
              {Array.from({ length: rows }).map((_, i) => (
                <tr key={i} className="border-b border-border/70">
                  <td className="px-3 py-4"><div className="h-5 w-56 skeleton rounded-md" /></td>
                  <td className="px-3 py-4"><div className="h-5 w-20 skeleton rounded-md" /></td>
                  <td className="px-3 py-4"><div className="h-5 w-16 skeleton rounded-md" /></td>
                  <td className="px-3 py-4"><div className="h-5 w-24 skeleton rounded-md" /></td>
                  <td className="px-3 py-4"><div className="h-5 w-24 skeleton rounded-md" /></td>
                  <td className="px-3 py-4"><div className="h-5 w-10 skeleton rounded-md" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}
