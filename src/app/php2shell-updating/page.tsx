import { type Metadata } from 'next'
import Link from 'next/link'

import { PhpSupportForm } from '@/app/php2shell-updating/PhpSupportForm'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const previewImage = {
  url: 'https://carlaiau.com/images/carl-aiau.jpg',
  width: 800,
  height: 800,
  alt: 'Carl Aiau, New Zealand software engineer',
}

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://carlaiau.com/php2shell-updating',
  },
  title: 'PHP2Shell help & urgent site upgrades in New Zealand',
  description:
    'Urgent PHP2Shell patch and compatibility help for NZ small and medium businesses running WordPress, Laravel or other PHP sites without developer support',
  openGraph: {
    url: 'https://carlaiau.com/php2shell-updating',
    title: 'PHP2Shell: get your site patched with local NZ support',
    description:
      'Carl Aiau helps businesses without developer support test and upgrade PHP sites. Local environment replication, agentic tooling and a planned rollout.',
    type: 'website',
    locale: 'en_NZ',
    images: [previewImage],
  },
  twitter: {
    card: 'summary',
    images: [previewImage],
  },
}

const steps = [
  {
    title: 'Recreate your environment locally.',
    description:
      'I check your hosting, PHP version and dependencies, then replicate your environment locally so compatibility work happens away from the live site.',
  },
  {
    title: 'Fix compatibility. Test what matters.',
    description:
      'I use agentic tooling to investigate legacy code, work through upgrade blockers and assist with testing. I review the changes and check the journeys your business relies on, such as logins, forms and checkout.',
  },
  {
    title: 'Roll out the patch with a plan.',
    description:
      'We agree the changes, confirm backups and a rollback plan, then coordinate the PHP update with your host where needed. I check the running version and key site functions after deployment.',
  },
]

const sourceLinkClassName =
  'font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 hover:text-teal-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-teal-400'

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
            Get your vulnerability patched{' '}
            <span className="text-green-600 dark:text-green-400">ASAP.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            PHP2Shell news got you sweating? 
            If your business relies on PHP and you don't have a developer to call, figuring out what to update and whether it'll break is daunting. 
            I help businesses running WordPress, Laravel and other PHP applications work through the upgrade.
            I've been working with PHP since 2012, old plugins, custom themes and a developer who’s moved on are familiar territory.
            
            
          </p>
          <div className="mt-6">
            <Button href="#request-help"  className="min-h-11">
              Get help with your site
            </Button>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            PHP released critical security fixes on 22 October 2026. Read the{' '}
            <a
              href="https://www.php2shell.com/"
              className={sourceLinkClassName}
            >
              PHP2Shell research and upgrade guidance
            </a>
            and {' '}
            <a
              href="https://security.thecolab.ai/"
              className={sourceLinkClassName}
            >
              The Colab's NZ vulnerability report
            </a>{' '}.
          </p>
        </section>

        <section aria-labelledby="static-alternative-heading" className="mt-16 max-w-2xl">
          <h2 id="static-alternative-heading" className="text-2xl font-bold tracking-tight">
            Rarely change your site? Consider a static conversion.
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            For a brochure or informational site, I can replicate your existing
            design and content as a static website, removing the live PHP and
            WordPress stack. Compatible booking embeds can stay. I’ll check
            whether conversion is a better long-term fit for your site.
          </p>
          <Link
            href="/static-site-conversion"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
          >
            Explore static site conversion
          </Link>
        </section>

        <section
          aria-labelledby="approach-heading"
          className="mt-20 grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
        >
          <div>
            <h2
              id="approach-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              An urgent update. A considered approach, developed through years of experience.
            </h2>
            <p className="mt-5 text-base text-zinc-600 dark:text-zinc-400">
              An old theme, a custom plugin or an ageing application can make a
              PHP upgrade feel risky. I help you work through those blockers so
              your site can run on a patched PHP release.
            </p>
            <ol className="mt-8 space-y-7">
              {steps.map((step) => (
                <li key={step.title}>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
              Already have a hosting alert? Include it in your enquiry. You
              don’t need to know your PHP version to get in touch.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4"
            >
              More about Carl
            </Link>
          </div>

          <div id="request-help" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let’s get your site updated.
            </h2>
            <p className="mt-3 mb-8 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Tell me a little about your site. Minimum billing is{' '}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-100">
                4 hours at NZ$1,000 total
              </strong>
              . I’ll respond to confirm availability and the next steps.
            </p>
            <PhpSupportForm />
          </div>
        </section>

        <section aria-labelledby="questions-heading" className="mt-20">
          <h2
            id="questions-heading"
            className="text-2xl font-bold tracking-tight"
          >
            Before you get in touch.
          </h2>
          <div className="mt-5 space-y-5">
            <details>
              <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
                Is this for WordPress, Laravel or custom PHP?
              </summary>
              <p className="mt-2 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
                Yes. This service is for small and medium businesses running
                WordPress, WooCommerce, Laravel or another PHP application
                without dedicated developer support. If you’re not sure what
                your site uses, send the URL and I can help establish the next
                step.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
                Will everything be finished within four hours?
              </summary>
              <p className="mt-2 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
                Four hours is the minimum engagement, not a guarantee that every
                site can be upgraded in that time. Older code and unsupported
                dependencies may need more work. I’ll explain the blockers and
                agree further work with you before proceeding.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer py-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
                My host says PHP is patched. Do I still need help?
              </summary>
              <p className="mt-2 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
                Ask your host to confirm they’ve applied both PHP2Shell fixes to
                the PHP package serving your site. If they have already applied
                the fixes and your site works correctly, you may not need this
                service. I can help when compatibility problems or legacy code
                prevent an upgrade.
              </p>
            </details>
          </div>
        </section>
      </div>
    </Container>
  )
}
