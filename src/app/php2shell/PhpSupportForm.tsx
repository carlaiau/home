'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useRef, useState } from 'react'

import { Button } from '@/components/Button'
import {
  CheckboxField,
  SelectField,
  TextareaField,
  TextField,
} from '@/components/FormFields'

export function PhpSupportForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const errorRef = useRef<HTMLParagraphElement>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => {
      body.append(key, String(value))
    })
    setStatus('submitting')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Form submission failed')
      router.push('/php2shell/thanks')
    } catch {
      setStatus('error')
      requestAnimationFrame(() => errorRef.current?.focus())
    }
  }

  return (
    <form
      name="php2shell-support"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      aria-busy={status === 'submitting'}
      aria-describedby="enquiry-terms"
    >
      <input type="hidden" name="form-name" value="php2shell-support" />
      <input
        type="hidden"
        name="subject"
        value="Urgent PHP2Shell upgrade enquiry"
      />
      <p hidden>
        <label>
          Leave this empty:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset
        disabled={status === 'submitting'}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <legend className="sr-only">Your PHP support enquiry</legend>
        <TextField
          label="Your name"
          name="name"
          autoComplete="name"
          required
          maxLength={150}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
        <TextField
          label="Website"
          name="website"
          type="text"
          autoComplete="url"
          placeholder="yourbusiness.co.nz"
          required
          maxLength={2048}
          className="sm:col-span-2"
        />
        <SelectField
          label="What does your site run on?"
          name="platform"
          defaultValue="not-sure"
          options={[
            { label: 'I’m not sure', value: 'not-sure' },
            { label: 'WordPress / WooCommerce', value: 'wordpress' },
            { label: 'Laravel', value: 'laravel' },
            { label: 'Another PHP application', value: 'other-php' },
            { label: 'Multiple sites / applications', value: 'multiple' },
          ]}
        />
        <TextField
          label="Hosting provider (optional)"
          name="hosting"
          placeholder="It’s okay if you don’t know"
          maxLength={200}
        />
        <TextareaField
          label="What do you need help with?"
          name="message"
          rows={5}
          required
          maxLength={5000}
          aria-describedby="message-help"
          className="sm:col-span-2"
          description={
            <span
              id="message-help"
              className="mt-2 block text-sm text-zinc-600 dark:text-zinc-400"
            >
              Share any hosting alerts, your PHP version if known, and anything
              that must keep working. Please leave out passwords and access
              keys.
            </span>
          }
        />
        <CheckboxField
          name="minimum-engagement"
          value="Acknowledged: 4-hour minimum, NZD 1000 total"
          required
          className="sm:col-span-2"
          label={
            <>
              I understand the minimum engagement is{' '}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-100">
                4 hours, NZ$1,000 total
              </strong>
              . Any additional work will be agreed with me first.
            </>
          }
        />
        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'submitting'
              ? 'Sending your enquiry…'
              : 'Request urgent PHP support'}
          </Button>
          <p aria-live="polite" className="sr-only">
            {status === 'submitting' ? 'Sending your enquiry.' : ''}
          </p>
          <p
            id="enquiry-terms"
            className="mt-4 text-sm text-zinc-600 dark:text-zinc-400"
          >
            This is an enquiry, not a booking or a payment. I’ll use these
            details to respond and confirm availability and scope before work
            starts.
          </p>
          {status === 'error' && (
            <p
              ref={errorRef}
              tabIndex={-1}
              role="alert"
              className="mt-4 text-sm text-red-600 outline-offset-4 dark:text-red-400"
            >
              Your enquiry couldn’t be sent. Your details are still here; please
              try again, or{' '}
              <a
                href="/contact"
                className="font-semibold underline underline-offset-4"
              >
                use the contact page
              </a>
              .
            </p>
          )}
          <noscript>
            <p className="mt-4 text-sm">
              Please enable JavaScript to receive confirmation when your enquiry
              is sent.
            </p>
          </noscript>
        </div>
      </fieldset>
    </form>
  )
}
