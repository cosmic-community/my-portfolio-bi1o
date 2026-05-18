import { Homepage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function AboutSection({ homepage }: { homepage: Homepage | null }) {
  const about = getMetafieldValue(homepage?.metadata?.about_me)
  const profile = homepage?.metadata?.profile_photo

  if (!about && !profile) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
          {profile && (
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
                <img
                  src={`${profile.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          <div className="md:col-span-2">
            <h2 className="section-title mb-6">About Me</h2>
            {about && (
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: about }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}