import { getServices } from '@/lib/cosmic'
import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">
          Comprehensive digital solutions tailored to elevate your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const name = getMetafieldValue(service.metadata?.service_name) || service.title
          const category = getMetafieldValue(service.metadata?.service_category)
          const description = getMetafieldValue(service.metadata?.short_description)
          const price = getMetafieldValue(service.metadata?.starting_price)
          const image = service.metadata?.service_image

          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="card overflow-hidden group"
            >
              {image && (
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                {category && (
                  <span className="inline-block text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
                    {category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {name}
                </h3>
                {description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                )}
                {price && (
                  <p className="text-sm font-medium text-gray-900">
                    Starting at <span className="text-primary-600">{price}</span>
                  </p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}