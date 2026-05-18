'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const serviceLinks = [
    { name: 'Website Development', slug: 'website-development' },
    { name: 'SEO Services', slug: 'seo-services' },
    { name: 'GEO Services', slug: 'geo-services' },
    { name: 'Ad Placement Management', slug: 'ad-placement-management' },
    { name: 'Custom AI/RPA/Web Crawler', slug: 'custom-ai-rpa-web-crawler' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-40">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Long Zhiping
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/case-studies" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/experience" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Experience
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-2 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/services" className="px-4 py-2 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="/case-studies" className="px-4 py-2 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>Case Studies</Link>
              <Link href="/blog" className="px-4 py-2 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/experience" className="px-4 py-2 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>Experience</Link>
              <Link href="/contact" className="px-4 py-2 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}