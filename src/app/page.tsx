import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon} from '@/components/SocialIcons'

import logoSunobi from '@/images/logos/sunobi-logo.jpeg'
import logoPbd from "@/images/logos/pbd-icon.png"
import logoGoneGood from "@/images/logos/gg-icon.png"
import logoCarl from "@/images/logos/carl-icon.jpeg"
import logoDigitalMates from "@/images/logos/digital-mates.png"
import logoFem from '@/images/logos/fem.png'
import logoOtago from '@/images/logos/otago.png'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'

import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/image-6.jpg'

const photoImages = [image1, image6, image5, image2]
const photoRotations = ['-2deg', '0deg', '0deg', '2deg', '-2deg', '-2deg']
const photoAnimationTimings = photoImages.map((_, imageIndex) => ({
  animationDelay: `-${(imageIndex * 1.6 + Math.random() * 1.4).toFixed(2)}s`,
  animationDuration: `${(10 + Math.random() * 4).toFixed(2)}s`,
}))

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function EducationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
    </svg>
  )
}


function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  link?: {
    href: string
  }
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  description?: string
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-8 w-8  rounded-full" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.link ? (
            <Link
              href={role.link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Open ${role.company} in a new tab`}
              aria-label={`${role.company} (opens in a new tab)`}
              className="transition hover:text-teal-500 hover:underline hover:decoration-teal-500 hover:underline-offset-2 dark:hover:text-teal-400"
            >
              {role.company}
            </Link>
          ) : (
            role.company
          )}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-700 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
        { role.description && (
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.description}
        </dd>
        )}
      </dl>
    </li>
  )
}

function Resume({ education }: { education?: boolean }) {
  let resume: Array<Role> = education ? [
    {
      company: 'FrontendMasters',
      title: 'Continuing Education',
      logo: logoFem,
      start: '2024',
      end: 'Present',
      description: "Advanced software engineering, AI-assisted development and agentic workflows."
    },
    {
      company: 'University of Otago',
      title: 'PgDipSci, Computer Science',
      logo: logoOtago,
      start: '2018',
      end: '2019',
      description: "Specialised in Artificial Intelligence and Information Retrieval. Graduated with distinction."
    },
    {
      company: 'University of Otago',
      title: 'DipGrad, Computer Science',
      logo: logoOtago,
      start: '2017',
      end: '2018',
      description: "Intensive computer science conversion programme covering core undergraduate papers."
    },
    {
      company: 'University of Otago',
      title: 'BCom, Finance',
      logo: logoOtago,
      start: '2010',
      end: '2013',
      description: "Commerce degree with a focus on finance, markets and commercial decision-making"
    }
  ]:
  [
    {
      company: 'Pale Blue Dawn',
      title: 'Co-Founder & Engineer',
      link: { href: 'https://www.palebluedawn.com/' },
      logo: logoPbd,
      start: '2024',
      end:'Present',
      description: "Building an Agentic workflow and integrations platform for the solar industry and beyond."
    },
      {
        company: 'GoneGood',
        title: 'Tech Lead',
        link: { href: 'https://www.gonegood.co.nz/' },
        logo: logoGoneGood,
        start: '2025',
        end: 'Present',
        description: "Led architecture and app development for a food-waste reduction service."
      },
    {
      company: 'Sunobi',
      title: 'VP of Development',
      link: { href: 'https://www.sunobi.com/' },
      logo: logoSunobi,
      start: '2020',
      end: '2024',
      description: "First technical hire. Helped scale the product and engineering team behind 200MW+ of solar sales."
    },
    {
      company: 'Digital Mates',
      title: 'Technical Co-Founder',
      link: { href: 'https://www.digitalmates.co.nz/' },
      logo: logoDigitalMates,
      start: '2020',
      end: '2025',
      description: "Built fast websites, statically generated and headless applications for growing agencies and businesses."
    },
    {
      company: 'Self Employed',
      title: 'Freelance Engineer',
      logo: logoCarl,
      start: '2012',
      end: 'Present',
      description: "Delivered WordPress builds, JS web apps, and product development across a range of client projects"
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        { education ? <EducationIcon className="h-6 w-6 flex-none" /> : <BriefcaseIcon className="h-6 w-6 flex-none" /> }
        <span className="ml-3">{education ? 'Education' : 'Work'}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-12">
        {photoImages.map((image, imageIndex) => (
          <div
            key={image.src}
            className="photo-rotation relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
            style={
              {
                '--photo-rotation':
                  photoRotations[imageIndex % photoRotations.length],
                '--photo-animation-delay':
                  photoAnimationTimings[imageIndex].animationDelay,
                '--photo-animation-duration':
                  photoAnimationTimings[imageIndex].animationDuration,
              } as React.CSSProperties
            }
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="animate-photo-ken-burns absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer, now working agentically.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            For over ten years, I wrote code from scratch. Now I work agentically, using AI as leverage to build faster without treating production like a playground. This site took 45 minutes, which is kind of the point. What an exciting time to be building software. Bad news for moats.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://github.com/carlaiau" icon={GitHubIcon}>
              GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/carlaiau/" icon={LinkedInIcon}>
              LinkedIn
            </SocialLink>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-2">
          
            <Resume/>
          
          
            <Resume education />
          
        </div>
      </Container>
    </>
  )
}
