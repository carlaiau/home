'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

import { Button } from '@/components/Button'
import { SelectField, TextareaField, TextField } from '@/components/FormFields'

export function ContactForm() {
  let router = useRouter()
  let [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    let formData = new FormData(event.currentTarget)
    let body = new URLSearchParams()

    formData.forEach((value, key) => {
      body.append(key, String(value))
    })

    try {
      let response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      router.push('/contact/thanks')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <TextField label="Name" name="name" autoComplete="name" required />
      <TextField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField label="Subject" name="subject" required />
      <SelectField
        label="Budget"
        name="budget"
        options={[
          { label: 'Not sure yet', value: 'not-sure' },
          { label: 'Under $1k', value: 'under-1k' },
          { label: '$1k-$5k', value: '1k-5k' },
          { label: '$5k-$25k', value: '5k-25k' },
          { label: '$25k-$50k', value: '25k-50k' },
          { label: '$50k-$100k', value: '50k-100k' },
          { label: '$100k+', value: '100k+' },
        ]}
      />

      <TextareaField
        label="Message"
        name="message"
        rows={6}
        required
        className="sm:col-span-2"
      />

      <div className="sm:col-span-2">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send message'}
        </Button>
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600 dark:text-red-400">
            Something went wrong while sending your message. Please try again.
          </p>
        )}
      </div>
    </form>
  )
}
