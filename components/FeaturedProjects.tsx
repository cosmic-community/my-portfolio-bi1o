import Link from 'next/link'
import { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Case Studies</h2>
          <p className="section-subtitle">Recent projects showcasing real results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const title = getMetafieldValue(project.metadata?.project_title) || project.title
            const client = getMetafieldValue(project.metadata?.client_name)
            const description = getMetafieldValue(project.metadata?.short_description)
            const image = project.metadata?.main_image

            return (
              <Link
                key={project.id}
                href={`/case-studies/${project.slug}`}
                className="card overflow-hidden group"
              >
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
                  {client && <p className="text-xs text-gray-500 mb-2">{client}</p>}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {title}
                  </h3>
                  {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-secondary">View All Case Studies</Link>
        </div>
      </div>
    </section>
  )
}