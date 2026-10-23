'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useRef, useState } from 'react'

import { Button } from '@/components/Button'
import { SelectField, TextareaField, TextField } from '@/components/FormFields'

export function StaticSiteForm() {
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
      router.push('/static-site-conversion/thanks')
    } catch {
      setStatus('error')
      requestAnimationFrame(() => errorRef.current?.focus())
    }
  }

  return (
    <form
      name="static-site-conversion"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      aria-busy={status === 'submitting'}
      aria-describedby="conversion-enquiry-terms"
    >
      <input type="hidden" name="form-name" value="static-site-conversion" />
      <input
        type="hidden"
        name="subject"
        value="Static site conversion enquiry"
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
        <legend className="sr-only">Your static site conversion enquiry</legend>
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
            {
              label: 'WordPress / a WordPress page builder',
              value: 'wordpress',
            },
            { label: 'Another website builder or CMS', value: 'other-cms' },
            { label: 'A custom-built website', value: 'custom' },
          ]}
        />
        <SelectField
          label="How often do you change the content?"
          name="update-frequency"
          defaultValue="not-sure"
          options={[
            { label: 'I’m not sure', value: 'not-sure' },
            { label: 'Rarely / a few times a year', value: 'rarely' },
            { label: 'About once a month', value: 'monthly' },
            { label: 'Weekly or more often', value: 'frequently' },
          ]}
        />
        <TextareaField
          label="Anything that needs to keep working? (optional)"
          name="message"
          rows={5}
          maxLength={5000}
          aria-describedby="conversion-message-help"
          className="sm:col-span-2"
          description={
            <span
              id="conversion-message-help"
              className="mt-2 block text-sm text-zinc-600 dark:text-zinc-400"
            >
              Bookings, contact forms, payments, maps or other integrations.
              Please leave out passwords and access keys.
            </span>
          }
        />
        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="min-h-11 disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'submitting'
              ? 'Sending your enquiry…'
              : 'Request a conversion assessment'}
          </Button>
          <p aria-live="polite" className="sr-only">
            {status === 'submitting' ? 'Sending your enquiry.' : ''}
          </p>
          <p
            id="conversion-enquiry-terms"
            className="mt-4 text-sm text-zinc-600 dark:text-zinc-400"
          >
            I’ll use these details to respond about suitability, scope and a
            quote. No work or billing starts until we agree to proceed.
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
