import { Calendar, MapPin, GraduationCap } from 'lucide-react'
import { education } from '../content'
import Section from './ui/Section'
import TiltCard from './ui/TiltCard'
import { StaggerContainer, RevealItem } from './ui/Reveal'

const Education = () => (
  <Section id="education" title="Education & Training" eyebrow="Learning" delay={0.1} maxWidth="max-w-5xl">
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" amount={0.1}>
      {education.map((edu) => (
        <RevealItem key={`${edu.institution}-${edu.degree}`} className="h-full">
          <TiltCard as="article" className="glass-card rounded-2xl p-8 lg:p-10 h-full flex flex-col">
            <div className="w-14 h-14 bg-brand-50 dark:bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-700 dark:text-brand-300 mb-6">
              <GraduationCap size={28} aria-hidden />
            </div>
            <h3 className="font-display text-2xl font-bold text-formal-900 dark:text-formal-50 leading-snug mb-2">
              {edu.degree}
            </h3>
            <h4 className="text-lg font-semibold text-formal-600 dark:text-formal-400 mb-6">{edu.institution}</h4>

            {edu.details ? (
              <ul className="space-y-2 mb-6">
                {edu.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start text-sm text-formal-600 dark:text-formal-300 leading-relaxed"
                  >
                    <span className="mr-2.5 mt-1.5 block w-1 h-1 bg-brand-500 rounded-full shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="space-y-4 pt-4 mt-auto border-t border-formal-100 dark:border-formal-700">
              <div className="flex items-center text-sm font-medium text-formal-500 dark:text-formal-400">
                <Calendar size={16} className="mr-3 text-formal-400 dark:text-formal-500" aria-hidden />
                <span className="uppercase tracking-wider">{edu.period}</span>
              </div>
              <div className="flex items-center text-sm font-medium text-formal-500 dark:text-formal-400">
                <MapPin size={16} className="mr-3 text-formal-400 dark:text-formal-500" aria-hidden />
                <span className="uppercase tracking-wider">{edu.location}</span>
              </div>
            </div>
          </TiltCard>
        </RevealItem>
      ))}
    </StaggerContainer>
  </Section>
)

export default Education
