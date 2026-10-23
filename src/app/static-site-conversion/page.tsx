import { type Metadata } from 'next'
import Link from 'next/link'

import { StaticSiteForm } from '@/app/static-site-conversion/StaticSiteForm'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const title = 'WordPress to static site conversion in New Zealand'
const description =
  'Keep your existing website’s design and content, reduce ongoing hosting costs, and remove the WordPress maintenance burden. Static site conversions by Carl Aiau, Dunedin, NZ.'
const previewImage = {
  url: 'https://carlaiau.com/images/carl-aiau.jpg',
  width: 800,
  height: 800,
  alt: 'Carl Aiau, New Zealand software engineer',
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://carlaiau.com/static-site-conversion' },
  openGraph: {
    title,
    description,
    url: 'https://carlaiau.com/static-site-conversion',
    type: 'website',
    locale: 'en_NZ',
    images: [previewImage],
  },
  twitter: { card: 'summary', title, description, images: [previewImage] },
}

const conversionSteps = [
  {
    title: 'Check what your site actually needs.',
    description:
      'I review the pages, content and integrations, identify anything that depends on WordPress, and confirm what can move across. You get a scope and quote before work starts.',
  },
  {
    title: 'Replicate the site you already have.',
    description:
      'I use agentic tooling to help reproduce your existing design and content as a static site, then review the result by hand. We check mobile layouts, navigation, forms and booking journeys in a preview before anything goes live.',
  },
  {
    title: 'Move it over with a clear handover.',
    description:
      'We plan the switch, preserve existing page addresses where possible, and add redirects where needed. I check the live site and leave you with the files and a clear way to make future changes. We only retire the old hosting once everything is confirmed.',
  },
]

const questions = [
  {
    question: 'Will the conversion cost less than a rebuild?',
    answer:
      'For a suitable site, reusing the existing design, content and page structure can make conversion a much smaller job than a full redesign and rebuild. The cost depends on the number of pages and any functionality that needs replacing. I’ll review your site and quote the work before we proceed.',
  },
  {
    question: 'Can hosting really be free?',
    answer:
      'A suitable static site can run on a free hosting plan, subject to the provider’s limits and terms. We confirm the fit before switching. Your domain renewal, email hosting, paid booking tools and any form service are separate costs; they don’t disappear just because the website is static.',
  },
  {
    question: 'What happens to bookings and contact forms?',
    answer:
      'Many booking tools, maps and videos are embedded directly in the browser and can carry over. Contact forms need a service to receive submissions. WordPress plugins that rely on PHP or a database need to be replaced or handled differently. I check each integration as part of the assessment.',
  },
  {
    question: 'Can I still change the content later?',
    answer:
      'Yes. The files can be updated and the site published again. That works well for occasional changes. You won’t have the same WordPress editing screen, so if you need to edit pages every week or publish regularly, we should discuss whether keeping a CMS makes more sense.',
  },
  {
    question: 'What changes about security?',
    answer:
      'The public site no longer needs WordPress, its plugins, a PHP runtime or a live database. That removes their public-facing attack paths and routine patching. It doesn’t make the whole setup risk-free: hosting and domain accounts, third-party scripts and connected services still need to be managed properly.',
  },
]

export default function StaticSiteConversion() {
  return (
    <Container className="mt-14 sm:mt-20">
      <div className="text-zinc-800 selection:bg-zinc-200 selection:text-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-700 dark:selection:text-white">
        <section aria-labelledby="conversion-heading" className="max-w-3xl">
          <h1
            id="conversion-heading"
            className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            Keep your website.
            <br />
            Lose the WordPress upkeep.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            Still paying to host and maintain a site that barely changes? If
            your website mainly tells people who you are, what you do and how to
            book, it may no longer need WordPress or a page builder behind it.
          </p>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            I can replicate the design and content you already have as a
            lightweight static site. Reusing what works keeps the scope smaller
            than starting a redesign from scratch, with fewer ongoing costs and
            no WordPress stack to patch.
          </p>
          <div className="mt-6">
            <Button href="#assessment" className="min-h-11">
              See if your site is a fit
            </Button>
          </div>
          <p className="mt-5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            I’m Carl Aiau, a software engineer in Dunedin, New Zealand. I
            started in PHP in 2012 and have worked on production WordPress sites
            for over ten years.
          </p>
        </section>

        <section
          aria-labelledby="fit-heading"
          className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2
              id="fit-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Built years ago.
              <br />
              Still doing the same job.
            </h2>
            <p className="mt-5 text-base text-zinc-600 dark:text-zinc-400">
              WordPress page builders made sense when the site was built. If you
              rarely log in now, you may be maintaining software you don’t need.
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base text-zinc-600 marker:text-zinc-400 dark:text-zinc-400">
              <li>A brochure, informational or service-based website.</li>
              <li>
                Content that changes occasionally, rather than every week.
              </li>
              <li>A design you’re happy with and want to keep.</li>
              <li>
                Bookings or other tools that can run as embeds or external
                links.
              </li>
            </ul>
            <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
              An online shop, member portal or heavily database-driven site
              needs a different assessment. I’ll flag that before recommending a
              conversion.
            </p>
          </div>
          <div className="space-y-7">
            <div>
              <h3 className="text-lg font-semibold">
                Free static hosting, where it fits.
              </h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                A suitable site can move to a free static hosting plan and leave
                its paid web hosting behind. Domain renewals, email and any paid
                third-party services remain separate.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Less software exposed to the internet.
              </h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Remove the live WordPress login, plugin stack, PHP runtime and
                database. That takes away a whole layer of routine updates and
                CMS security exposure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Keep the integrations that work.
              </h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Many booking widgets, maps and videos already run in the
                browser. I check your embeds and forms, keep the compatible
                ones, and identify anything that needs an alternative.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="process-heading"
          className="mt-20 grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
        >
          <div>
            <h2
              id="process-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              A smaller project.
              <br />A considered handover.
            </h2>
            <ol className="mt-7 space-y-7">
              {conversionSteps.map((step) => (
                <li key={step.title}>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4"
            >
              More about Carl
            </Link>
          </div>
          <div id="assessment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let’s look at your existing site.
            </h2>
            <p className="mt-3 mb-8 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Send me the address and what needs to keep working. I’ll confirm
              whether a static conversion is a good fit and quote the work. No
              need to know which page builder your site uses.
            </p>
            <StaticSiteForm />
          </div>
        </section>

        <section aria-labelledby="questions-heading" className="mt-20">
          <h2
            id="questions-heading"
            className="text-2xl font-bold tracking-tight"
          >
            Before you make the switch.
          </h2>
          <div className="mt-5 space-y-5">
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
                  {question}
                </summary>
                <p className="mt-2 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
                  {answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            For an example of current hosting terms, see{' '}
            <a
              href="https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/"
              className="font-medium text-zinc-800 underline underline-offset-4 dark:text-zinc-100"
            >
              Cloudflare’s static asset pricing and limits
            </a>
            . Hosting and integrations are checked against your site’s
            requirements before we choose a setup.
          </p>
        </section>
      </div>
    </Container>
  )
}
