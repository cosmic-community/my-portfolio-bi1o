import { getBlogPosts, getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">Insights, tutorials, and thoughts on digital innovation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post) => {
          const title = getMetafieldValue(post.metadata?.title) || post.title
          const excerpt = getMetafieldValue(post.metadata?.excerpt)
          const author = getMetafieldValue(post.metadata?.author_name)
          const date = getMetafieldValue(post.metadata?.published_date)
          const image = post.metadata?.featured_image

          return (
            <Link key={post.id} href={`/blog/${post.slug}`} className="card overflow-hidden group">
              {image && (
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                {date && <p className="text-xs text-gray-500 mb-2">{date}</p>}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {title}
                </h3>
                {excerpt && <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>}
                {author && <p className="text-xs text-gray-500">By {author}</p>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}