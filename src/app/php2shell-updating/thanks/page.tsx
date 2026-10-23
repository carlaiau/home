import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Website enquiry sent',
  description:
    'Your PHP upgrade or static conversion enquiry has been sent to Carl Aiau.',
  robots: { index: false, follow: false },
}

export default function PhpSupportThanks() {
  return (
    <SimpleLayout
      title="Your enquiry is sent."
      intro="Thanks for getting in touch. I’ll review your site and respond about the right option, scope and cost. No work or billing starts until we agree to proceed."
    >
      <Link
        href="/php2shell-updating"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-zinc-800 underline underline-offset-4 dark:text-zinc-100"
      >
        Back to website support
      </Link>
    </SimpleLayout>
  )
}
