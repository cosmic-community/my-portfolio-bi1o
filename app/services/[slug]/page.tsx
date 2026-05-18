// app/services/[slug]/page.tsx
import { getService, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const category = getMetafieldValue(service.metadata?.service_category)
  const description = getMetafieldValue(service.metadata?.short_description)
  const fullDescription = getMetafieldValue(service.metadata?.full_description)
  const features = getMetafieldValue(service.metadata?.key_features)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.service_image

  return (
    <article className="container-custom py-16 md:py-24">
      <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block">
        ← Back to Services
      </Link>

      <div className="max-w-4xl mx-auto">
        {category && (
          <span className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            {category}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{name}</h1>
        {description && <p className="text-xl text-gray-600 mb-8">{description}</p>}

        {image && (
          <div className="aspect-video overflow-hidden rounded-2xl mb-12 bg-gray-100">
            <img
              src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {fullDescription && (
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: fullDescription }}
          />
        )}

        {features && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: features }} />
          </div>
        )}

        {price && (
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <p className="text-sm opacity-90 mb-2">Starting at</p>
            <p className="text-4xl font-bold mb-6">{price}</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </article>
  )
}