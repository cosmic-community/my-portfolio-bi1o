import { getHomepage, getServices, getProjects, getSkills } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsSection from '@/components/SkillsSection'
import AboutSection from '@/components/AboutSection'

export default async function HomePage() {
  const [homepage, services, projects, skills] = await Promise.all([
    getHomepage(),
    getServices(),
    getProjects(),
    getSkills(),
  ])

  const featuredProjects = projects.filter(p => p.metadata?.featured).slice(0, 3)

  return (
    <>
      <Hero homepage={homepage} />
      <AboutSection homepage={homepage} />
      <ServicesSection services={services} />
      {featuredProjects.length > 0 && <FeaturedProjects projects={featuredProjects} />}
      <SkillsSection skills={skills} />
    </>
  )
}