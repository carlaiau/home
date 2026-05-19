import { type Metadata } from 'next'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Carl Aiau about software, agentic systems, and product engineering work.',
}

function TextField({
  label,
  name,
  type = 'text',
  autoComplete,
  required = false,
  className,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
  required?: boolean
  className?: string
}) {
  return (
    <label className={clsx('block', className)}>
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
        {label}
      </span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-xs outline-hidden transition placeholder:text-zinc-400 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  required = false,
  className,
  options,
}: {
  label: string
  name: string
  required?: boolean
  className?: string
  options: Array<{ label: string; value: string }>
}) {
  return (
    <label className={clsx('block', className)}>
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-xs outline-hidden transition focus:border-teal-500 focus:ring-3 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      >
        <option value="" disabled>
          Select a range
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let’s build something useful."
      intro="Tell me what you’re working on, what you’re trying to achieve, and roughly what kind of budget you have in mind. I work best on product, workflow, automation and integration problems where speed matters, but production still needs to behave."
    >
      <div className="max-w-3xl">
        <form
          name="contact"
          method="POST"
          action="/contact/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <TextField
            label="Name"
            name="name"
            autoComplete="name"
            required
          />
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
                { label: '$1k–$5k', value: '1k-5k' },
                { label: '$5k–$25k', value: '5k-25k' },
                { label: '$25k–$50k', value: '25k-50k' },
                { label: '$50k–$100k', value: '50k-100k' },
                { label: '$100k+', value: '100k+' }
              
              
            ]}
          />
          

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
              Message
            </span>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-xs outline-hidden transition placeholder:text-zinc-400 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </label>

          <div className="sm:col-span-2">
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </div>
    </SimpleLayout>
  )
}
