import { type Metadata } from 'next'

import { PhpSupportForm } from '@/app/php2shell-updating/PhpSupportForm'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const title = 'PHP2Shell help: fix your site for less than a rebuild'
const description =
  'Keep the website you already paid for. PHP upgrades and affordable static conversions for older WordPress and PHP sites, with Carl Aiau in New Zealand.'
const previewImage = {
  url: 'https://carlaiau.com/images/carl-aiau.jpg',
  width: 800,
  height: 800,
  alt: 'Carl Aiau, New Zealand software engineer',
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://carlaiau.com/php2shell-updating' },
  openGraph: {
    title,
    description,
    url: 'https://carlaiau.com/php2shell-updating',
    type: 'website',
    locale: 'en_NZ',
    images: [previewImage],
  },
  twitter: { card: 'summary', title, description, images: [previewImage] },
}

export default function Php2Shell() {
  return (
    <Container className="mt-14 sm:mt-20">
      <div className="text-zinc-800 selection:bg-zinc-200 selection:text-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-700 dark:selection:text-white">
        <section aria-labelledby="php-heading" className="max-w-3xl">
          <h1
            id="php-heading"
            className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            <span className="text-red-600 dark:text-red-400">PHP2Shell.</span>{' '}
            Protect your site{' '}
            <span className="text-green-600 dark:text-green-400">ASAP.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            PHP2Shell news got you sweating? A security scare doesn’t have to
            mean paying for a whole new website. I help small and medium
            businesses keep the site they already paid for, with a PHP upgrade
            or a static conversion that can cost much less than a full rebuild.
          </p>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            I’m Carl Aiau, based in Dunedin, New Zealand. I’ve worked with PHP
            since 2012 and on production WordPress sites for over ten years.
          </p>
          <div className="mt-6">
            <Button href="#request-help" className="min-h-11">
              Find the right option for my site
            </Button>
          </div>
          <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
            About the vulnerabilities:{' '}
            <a
              href="https://www.php2shell.com/"
              className="font-medium text-zinc-800 underline underline-offset-4 dark:text-zinc-100"
            >
              PHP2Shell research
            </a>{' '}
            and{' '}
            <a
              href="https://security.thecolab.ai/"
              className="font-medium text-zinc-800 underline underline-offset-4 dark:text-zinc-100"
            >
              The Colab’s NZ report
            </a>
            .
          </p>
        </section>

        <section
          aria-labelledby="options-heading"
          className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
        >
          <div>
            <h2
              id="options-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Keep what works.
              <br />
              Spend less fixing it.
            </h2>
            <div className="mt-7 space-y-7">
              <div>
                <h3 className="text-lg font-semibold">
                  Need PHP? Get it patched.
                </h3>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  For WordPress, Laravel and sites that rely on PHP, I replicate
                  your environment locally, use agentic tooling to resolve
                  upgrade blockers, and review and test the changes before
                  deployment.
                </p>
              </div>
              <div id="static-conversion" className="scroll-mt-24">
                <h3 className="text-lg font-semibold">
                  Rarely change your site? Go static.
                </h3>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  For a brochure or informational site, I can replicate your
                  existing design and content as a static website for a fraction
                  of the cost of a full rebuild. No redesign needed. Compatible
                  booking embeds and other browser-based tools can stay.
                </p>
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  That removes the public WordPress, PHP and database stack,
                  reduces security exposure, and can bring web hosting costs
                  down to zero on a suitable free plan.
                </p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Domain, email and paid integrations remain separate. I’ll
                  check forms, bookings and how you need to edit content before
                  recommending a conversion.
                </p>
              </div>
            </div>
            <p className="mt-7 text-sm text-zinc-600 dark:text-zinc-400">
              We agree the scope and cost first. You review a working preview
              before the live site changes.
            </p>
          </div>
          <div id="request-help" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let’s look at your site.
            </h2>
            <p className="mt-3 mb-7 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Send the address and I’ll help you choose the sensible option. PHP
              upgrade support has a four-hour minimum of NZ$1,000 total. Static
              conversions are quoted per site.
            </p>
            <PhpSupportForm />
          </div>
        </section>
      </div>
    </Container>
  )
}
