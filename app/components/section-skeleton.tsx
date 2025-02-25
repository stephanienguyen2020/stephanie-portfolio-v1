export default function SectionSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-4">
      <div className="h-8 w-1/3 rounded-lg bg-muted mx-auto" />
      <div className="space-y-3">
        <div className="h-4 w-3/4 rounded bg-muted mx-auto" />
        <div className="h-4 w-1/2 rounded bg-muted mx-auto" />
      </div>
    </div>
  )
}

