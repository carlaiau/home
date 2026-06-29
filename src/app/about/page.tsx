import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/photos/image-3.jpg'



export const metadata: Metadata = {
  title: 'About',
  description:
    'I\'m Carl, a Dunedin-based software engineer and co-founder of Pale Blue Dawn.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <div className="aspect-square rotate-3 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="animate-photo-ken-burns h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Carl, a software engineer based in Dunedin, New Zealand.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>I have been building software since 2012. I started as a self-taught PHP developer, and later moved into JavaScript, across React, Vue and Node, along with Go and product infrastructure.</p>

            <p>Most of my work sits somewhere between product and engineering: taking messy business problems, turning them into usable software, and making sure the system can survive real customers and changing commercial requirements.</p>

            <p>These days I am focused on agentic engineering, but with a strong bias toward production safety. I&apos;m interested in using AI to generate, inspect and repair software workflows, without giving agents uncontrolled access to production systems.</p>

            <p>I&apos;m a co-founder of <a href="https://palebluedawn.com" className="transition hover:text-teal-500 hover:underline hover:decoration-teal-500 hover:underline-offset-2 dark:hover:text-teal-400">Pale Blue Dawn</a>, or PBD, where we are building a verifiable, agentically driven workflow and integrations platform for the solar industry and beyond. Agents can explore and refine integration logic through isolated feedback loops, automated testing and CI/CD Actions, while production secrets and sensitive customer environments stay safely out of reach.</p>

            <p>Before PBD, I joined Sunobi as the first engineer and later became VP of Development. I worked across frontend, backend, DevOps, technical strategy and delivery management, while helping grow the engineering team to 14. During that time, the platform supported more than 200MW of solar system sales.</p>

            <p>I studied Computer Science at the University of Otago, completing a DipGrad and PGDipSci with distinction, specialising in Artificial Intelligence and Information Retrieval. I also studied Finance, which helps me think about software as a commercial system, not just a technical one.</p>

            <p>I work best in small teams where ideas move quickly, feedback is honest, and the work matters more than who owns the idea.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
