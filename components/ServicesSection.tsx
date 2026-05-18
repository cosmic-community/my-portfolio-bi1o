import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServicesSection({ services }: { services: Service[] }) {
  if (!services || services.length === 0) return null

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">Comprehensive digital solutions for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => {
            const name = getMetafieldValue(service.metadata?.service_name) || service.title
            const description = getMetafieldValue(service.metadata?.short_description)
            const category = getMetafieldValue(service.metadata?.service_category)

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card p-6 group"
              >
                {category && (
                  <span className="inline-block text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
                    {category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {name}
                </h3>
                {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}
                <p className="mt-4 text-sm font-medium text-primary-600 group-hover:underline">Learn more →</p>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">View All Services</Link>
        </div>
      </div>
    </section>
  )
}