import type { Metadata } from "next"
import { PlusIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Components",
  description: "Reusable UI components",
}

export default function Page() {
  const posts: any[] = [] // replace later with real data

  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Components
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Pixel-perfect, reusable UI building blocks.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1.5 hover:bg-muted transition">
          <PlusIcon className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-border" />

      {/* Content */}
      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <div
              key={i}
              className="p-4 border rounded-md hover:bg-muted transition"
            >
              {post.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      
      {/* Skeleton preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl opacity-40 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-20 rounded-md border border-dashed animate-pulse"
          />
        ))}
      </div>

      {/* Message */}
      <h2 className="text-xl font-medium">
        Building something useful
      </h2>

      <p className="text-sm text-muted-foreground mt-2 max-w-md">
        Components are being designed and refined. This space will soon contain
        reusable UI elements for your app.
      </p>
    </div>
  )
}