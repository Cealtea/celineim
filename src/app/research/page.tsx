import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import { talks, papers } from './data'


function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}


export const metadata: Metadata = {
  title: 'Talks and Publications',
  description:
    'Things I’ve published in academia and talked about at industry conferences.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Things I’ve published in academia and talked about at industry conferences."
      intro="Complete list by reverse chronological order of all my talks and academic publications in Computer Science and Biology."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          {talks.map((talk) => (
            <Appearance
              href={talk.links[0].href}
              title={talk.name}
              description={talk.description}
              event={talk.event}
              cta={talk.links[0].label }
          />
          ))}
        </SpeakingSection>
        <SpeakingSection title="Academic Papers">
        {papers.map((paper) => (
            <Appearance
              href={paper.url}
              title={paper.name}
              description={paper.description}
            event={paper.event}
            cta="See details on Google Scholar"
            />
          ))}
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
