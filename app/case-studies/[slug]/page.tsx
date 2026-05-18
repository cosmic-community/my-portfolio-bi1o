// app/case-studies/[slug]/page.tsx
import { getProject, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.project_title) || project.title
  const client = getMetafieldValue(project.metadata?.client_name)
  const description = getMetafieldValue(project.metadata?.short_description)
  const fullDescription = getMetafieldValue(project.metadata?.full_description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)
  const completionDate = getMetafieldValue(project.metadata?.completion_date)
  const image = project.metadata?.main_image
  const screenshots = project.metadata?.screenshots || []

  return (
    <article className="container-custom py-16 md:py-24">
      <Link href="/case-studies" className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="max-w-5xl mx-auto">
        {client && <p className="text-sm text-primary-600 font-medium mb-3">{client}</p>}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
        {description && <p className="text-xl text-gray-600 mb-8">{description}</p>}

        {image && (
          <div className="aspect-video overflow-hidden rounded-2xl mb-12 bg-gray-100">
            <img
              src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            {fullDescription && (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: fullDescription }}
              />
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Project Details
              </h3>
              <dl className="space-y-3 text-sm">
                {client && (
                  <div>
                    <dt className="text-gray-500">Client</dt>
                    <dd className="font-medium text-gray-900">{client}</dd>
                  </div>
                )}
                {completionDate && (
                  <div>
                    <dt className="text-gray-500">Completed</dt>
                    <dd className="font-medium text-gray-900">{completionDate}</dd>
                  </div>
                )}
                {techStack && (
                  <div>
                    <dt className="text-gray-500">Tech Stack</dt>
                    <dd className="font-medium text-gray-900">{techStack}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-6 space-y-2">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    View Live Site →
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((screenshot, idx) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={`${screenshot.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                    alt={`${title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}