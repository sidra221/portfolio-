import { skillCategories, languages } from '../content'
import Chip from './ui/Chip'
import Section from './ui/Section'
import TiltCard from './ui/TiltCard'
import { StaggerContainer, RevealItem } from './ui/Reveal'

const Skills = () => (
  <Section id="skills" title="Skills & Expertise" eyebrow="Toolbox" delay={0.1} maxWidth="max-w-6xl">
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" amount={0.1}>
      {skillCategories.map((category) => (
        <RevealItem key={category.name} className="h-full">
          <TiltCard as="article" className="p-8 rounded-2xl glass-card h-full">
            <h3 className="font-display text-lg font-bold text-formal-900 dark:text-formal-100 mb-6 uppercase tracking-wide flex items-center gap-2.5">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-brand-500 to-plum-500" aria-hidden />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Chip key={skill} elevated>
                  {skill}
                </Chip>
              ))}
            </div>
          </TiltCard>
        </RevealItem>
      ))}

      {/* Languages sit in the same grid — they are part of the toolkit. */}
      <RevealItem className="h-full">
        <TiltCard as="article" className="p-8 rounded-2xl glass-card h-full">
          <h3 className="font-display text-lg font-bold text-formal-900 dark:text-formal-100 mb-6 uppercase tracking-wide flex items-center gap-2.5">
            <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-brand-500 to-plum-500" aria-hidden />
            Languages
          </h3>
          <ul className="space-y-4">
            {languages.map((lng) => (
              <li key={lng.name}>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-formal-900 dark:text-formal-100">{lng.name}</span>
                  <span className="text-sm font-bold text-brand-600 dark:text-brand-300">{lng.level}</span>
                </div>
                <p className="text-sm text-formal-500 dark:text-formal-400">{lng.detail}</p>
              </li>
            ))}
          </ul>
        </TiltCard>
      </RevealItem>
    </StaggerContainer>
  </Section>
)

export default Skills
