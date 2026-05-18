import Link from 'next/link'
import { Homepage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ homepage }: { homepage: Homepage | null }) {
  const title = getMetafieldValue(homepage?.metadata?.hero_title) || 'Building Digital Excellence'
  const subtitle = getMetafieldValue(homepage?.metadata?.hero_subtitle) || 'Professional services in web development, SEO, and AI solutions'
  const ctaText = getMetafieldValue(homepage?.metadata?.cta_button_text) || 'Get Started'
  const ctaLink = getMetafieldValue(homepage?.metadata?.cta_button_link) || '/contact'
  const heroImage = homepage?.metadata?.hero_image

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">{subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
          {heroImage && (
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                <img
                  src={`${heroImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-20 -z-10" />
    </section>
  )
}