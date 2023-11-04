import { Container } from '@/components/shared/container'
import { SocialLink } from './components/SocialLinks'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/icons/SocialIcons'
import { Card } from '@/components/shared/Card'

export default function CEO() {
  return (
    <>
      <Container className="mt-[9rem]">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800  sm:text-5xl">
            Lifestyle designer, founder, a husband and a part time psyconaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Nadir, a designer and entrepreneur based in Lahore City. I’m the
            founder and CEO of Design Haven, where we develop spaces that
            inspire regular people to explore the good things in life on their
            own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href={'/'} icon={TwitterIcon} />
            <SocialLink href={'/'} icon={InstagramIcon} />
            <SocialLink href={'/'} icon={GitHubIcon} />
            <SocialLink href={'/'} icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <Card>
          <Card.Title className='text-foreground'>My story</Card.Title>
          <Card.Eyebrow>How I got here</Card.Eyebrow>
          <Card.Description>
            I was born in 1996 in Lahore, Pakistan. I grew up in a middle-class
            family. My father was a civil engineer and my mother was a
            housewife. I have two siblings, a brother and a sister. I was the
            youngest of the three.
          </Card.Description>
          <Card.Cta>Read more</Card.Cta>
        </Card>
      </Container>
    </>
  )
}
