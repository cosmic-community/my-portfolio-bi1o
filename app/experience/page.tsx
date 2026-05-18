import { getWorkExperience, getMetafieldValue } from '@/lib/cosmic'

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="section-title">Work Experience</h1>
        <p className="section-subtitle">A journey of professional growth and accomplishments</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp) => {
          const jobTitle = getMetafieldValue(exp.metadata?.job_title) || exp.title
          const company = getMetafieldValue(exp.metadata?.company_name)
          const location = getMetafieldValue(exp.metadata?.location)
          const startDate = getMetafieldValue(exp.metadata?.start_date)
          const endDate = getMetafieldValue(exp.metadata?.end_date)
          const currentlyWorking = exp.metadata?.currently_working
          const description = getMetafieldValue(exp.metadata?.description)
          const logo = exp.metadata?.company_logo

          return (
            <div key={exp.id} className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                {logo && (
                  <img
                    src={`${logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={company}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{jobTitle}</h3>
                  {company && <p className="text-primary-600 font-medium">{company}</p>}
                  <div className="flex flex-wrap gap-x-3 text-sm text-gray-500 mt-1">
                    {location && <span>{location}</span>}
                    {(startDate || endDate) && (
                      <span>
                        {startDate} - {currentlyWorking ? 'Present' : endDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {description && (
                <div
                  className="prose prose-sm max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}