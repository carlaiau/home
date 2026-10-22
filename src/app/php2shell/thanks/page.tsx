import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'PHP support enquiry sent',
  description: 'Your PHP upgrade support enquiry has been sent to Carl Aiau.',
  robots: { index: false, follow: false },
}

export default function PhpSupportThanks() {
  return (
    <SimpleLayout
      title="Your PHP support enquiry is sent."
      intro="Thanks for getting in touch. I’ll review your details and respond to confirm availability, scope and next steps. Your enquiry is not a confirmed booking; no work or billing starts until we agree to proceed."
    >
      <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
        If you haven’t already, ask your hosting provider whether they have
        applied the fixes for CVE-2026-109618 and CVE-2026-109619 to the PHP
        runtime serving your site.
      </p>
      <Link
        href="/php2shell"
        className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-teal-700 underline underline-offset-4 dark:text-teal-400"
      >
        Back to PHP2Shell support
      </Link>
    </SimpleLayout>
  )
}
