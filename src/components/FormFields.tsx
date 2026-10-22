import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import clsx from 'clsx'

const controlClassName =
  'mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-xs outline-hidden transition placeholder:text-zinc-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-400'

const labelClassName = 'text-sm font-medium text-zinc-800 dark:text-zinc-100'

type FieldProps = { label: ReactNode; className?: string }

export function TextField({
  label,
  className,
  type = 'text',
  ...props
}: FieldProps & ComponentPropsWithoutRef<'input'>) {
  return (
    <label className={clsx('block', className)}>
      <span className={labelClassName}>{label}</span>
      <input type={type} className={controlClassName} {...props} />
    </label>
  )
}

export function SelectField({
  label,
  className,
  options,
  placeholder = 'Select a range',
  defaultValue = '',
  ...props
}: FieldProps &
  ComponentPropsWithoutRef<'select'> & {
    options: Array<{ label: string; value: string }>
    placeholder?: string
  }) {
  return (
    <label className={clsx('block', className)}>
      <span className={labelClassName}>{label}</span>
      <select
        defaultValue={defaultValue}
        className={controlClassName}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
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

export function TextareaField({
  label,
  className,
  description,
  ...props
}: FieldProps &
  ComponentPropsWithoutRef<'textarea'> & { description?: ReactNode }) {
  return (
    <label className={clsx('block', className)}>
      <span className={labelClassName}>{label}</span>
      <textarea className={controlClassName} {...props} />
      {description}
    </label>
  )
}

export function CheckboxField({
  label,
  className,
  ...props
}: FieldProps & Omit<ComponentPropsWithoutRef<'input'>, 'type'>) {
  return (
    <label
      className={clsx(
        'flex cursor-pointer items-start gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400',
        className,
      )}
    >
      <input
        type="checkbox"
        className="mt-1 size-4 shrink-0 accent-zinc-800 outline-offset-4 dark:accent-zinc-300"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
