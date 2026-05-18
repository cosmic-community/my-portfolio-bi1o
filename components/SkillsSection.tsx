import { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) return null

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => {
            const name = getMetafieldValue(skill.metadata?.skill_name) || skill.title
            const category = getMetafieldValue(skill.metadata?.category)
            const level = skill.metadata?.proficiency_level || 0
            const icon = skill.metadata?.icon

            return (
              <div key={skill.id} className="card p-6 text-center">
                {icon && (
                  <img
                    src={`${icon.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                    alt={name}
                    className="w-12 h-12 mx-auto mb-3 object-contain"
                  />
                )}
                <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                {category && <p className="text-xs text-gray-500 mb-3">{category}</p>}
                {level > 0 && (
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(level * 20, 100)}%` }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}