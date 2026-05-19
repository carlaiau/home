import { type Metadata } from 'next'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const googleTagId = 'G-JP4VK9FMHD'

export const metadata: Metadata = {
  title: {
    template: '%s - Carl Aiau',
    default:
      'Carl Aiau - Software engineer, and navigator of complexity',
  },
  description:
    'I’m Carl, a software engineer and entrepreneur based in Dunedin, New Zealand. I’m the founder and CEO of Pale Blue Dawn, where we develop technologies that empower regular people to explore space on their own terms.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
