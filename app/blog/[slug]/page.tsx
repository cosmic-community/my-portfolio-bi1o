// app/blog/[slug]/page.tsx
import { getBlogPost, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const content = getMetafieldValue(post.metadata?.content)
  const author = getMetafieldValue(post.metadata?.author_name)
  const date = getMetafieldValue(post.metadata?.published_date)
  const tags = getMetafieldValue(post.metadata?.tags)
  const image = post.metadata?.featured_image

  return (
    <article className="container-custom py-16 md:py-24">
      <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block">
        ← Back to Blog
      </Link>

      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          {excerpt && <p className="text-xl text-gray-600 mb-6">{excerpt}</p>}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {author && <span>By {author}</span>}
            {date && <span>•</span>}
            {date && <time>{date}</time>}
          </div>
        </header>

        {image && (
          <div className="aspect-video overflow-hidden rounded-2xl mb-12 bg-gray-100">
            <img
              src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {content && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {tags && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Tags:</span> {tags}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}