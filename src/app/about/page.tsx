import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-3.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Carl, a software engineer based in Dunedin, New Zealand.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>I’ve been building software since 2012, starting as a self-taught PHP developer before moving into JavaScript/TypeScript, React, Vue, Node, Go and product infrastructure.</p>
            <p>My work usually sits between product and engineering: turning messy business problems into usable systems, and keeping those systems flexible enough to survive real customers, unreliable APIs and changing commercial requirements.</p>
            <p>In 2020, I joined Sunobi as the first employed engineer and later became VP of Development. Sunobi was a sales engagement platform for the US residential solar market. I worked across frontend, backend, DevOps, technical strategy and delivery management while helping grow the engineering team to 14. During that time, the platform supported more than 300MW of solar system sales.</p>
            <p>I’m especially interested in agentic engineering: using AI systems to generate, inspect, repair and orchestrate software workflows. But I’m more interested in the safety layer than the novelty. Agents are useful when they operate inside clear boundaries, leave an audit trail, expose their reasoning through inspectable artefacts, and fail in ways humans can understand and recover from.</p>
<p>
              At Pale Blue Dawn, this shows up in how we design workflow execution. AI can help generate logic and guide users through complex integration decisions, but production runs remain traceable, replayable and retryable. The goal is not to hide complexity behind magic. It is to make complex systems easier to reason about without giving up control.</p>
            <p>The system is designed around the reality that external platforms fail. Executions can be visually inspected, replayed and retried, giving teams traceability when APIs return bad data, CRM states drift or automations break in production.</p>
            <p>I also work as tech lead for Gone Good, a New Zealand food-waste reduction platform. I owned the architecture across the customer app, vendor portal and internal admin interface, and led development through launch and iteration.</p>
            <p>I studied Computer Science at the University of Otago, completing a DipGrad and PGDipSci with distinction, specialising in Artificial Intelligence and Information Retrieval. I also studied Finance, which helps me think about software as a commercial system, not just a technical one.</p>
            <p>I work best in small teams where ideas move quickly, feedback is honest, and outcomes matter more than ownership.</p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            
            <SocialLink href="https://github.com/carlaiau" icon={GitHubIcon} className="mt-4">
              GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/carlaiau/" icon={LinkedInIcon} className="mt-4">
              LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hello@carlaiau.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hello@carlaiau.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
