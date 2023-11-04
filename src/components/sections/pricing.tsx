'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { CheckIcon } from '../icons/collection/CheckIcon'

type Price = {
  [key: string]: string
}

interface Tier {
  name: string
  id: string
  href: string
  price: Price
  description: string
  features: string[]
  mostPopular: boolean
}

interface Frequency {
  value: string
  label: string
  priceSuffix: string
}

const frequencies: Frequency[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers: Tier[] = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$48', annually: '$576' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="text-foreground mx-auto mt-6 max-w-2xl text-center text-lg leading-8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="group/announcement relative flex w-auto flex-row items-center gap-2 overflow-hidden rounded-full border border-gray-50 bg-opacity-100 p-1 pr-3 text-left text-sm shadow-md hover:border-gray-400 hover:border-opacity-30 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? '!bg-indigo-500' : 'text-gray-900',
                    'cursor-pointer rounded-full px-2.5 py-1',
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-white/5 ring-2 ring-brand'
                  : 'ring-1 ring-brand/80',
                'rounded-3xl p-8 xl:p-10',
              )}
            >
              <div className="flex items-center justify-between gap-x-4   ">
                <h3
                  id={tier.id}
                  className="text-brand text-lg font-semibold leading-8"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="text-white rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-foreground">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold bg-gradient-to-b from-slate-500 to-black bg-clip-text  tracking-tight text-transparent">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6  text-muted">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={clsx(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-gray-900 shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-gray-900 hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-brand"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
