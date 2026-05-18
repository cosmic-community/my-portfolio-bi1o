import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Long Zhiping</h3>
            <p className="text-sm text-gray-400">
              Digital solutions for modern businesses. Building the future, one project at a time.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/website-development" className="hover:text-white">Website Development</Link></li>
              <li><Link href="/services/seo-services" className="hover:text-white">SEO Services</Link></li>
              <li><Link href="/services/geo-services" className="hover:text-white">GEO Services</Link></li>
              <li><Link href="/services/ad-placement-management" className="hover:text-white">Ad Placement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <Link href="/contact" className="inline-block px-5 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100">
              Contact Us →
            </Link>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Long Zhiping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}