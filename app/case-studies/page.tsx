import { getProjects, getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default async function CaseStudiesPage() {
  const projects = await getProjects()

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="section-title">Case Studies</h1>
        <p className="section-subtitle">
          Real-world results delivered for clients across industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    src={`${image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                {client && (
                  <p className="text-sm text-gray-500 mb-2">{client}</p>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {title}
                </h3>
                {description && (
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}