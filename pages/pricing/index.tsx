import HomeLayout from "../../layouts/MainLayout";
import Image from "next/image";
import Head from "next/head";
import Footer from '../../components/Footer'
import PricingPageHeader from '../../components/PricingPageHeader'
import { FaPhone, FaAddressBook, FaInbox } from "react-icons/fa";
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}



const frequencies = [
	{ value: 'monthly', label: 'Web Design', priceSuffix: '/H' },
	{ value: 'annually', label: 'Web Development', priceSuffix: '/H' },
	{ value: 'monthly', label: 'Mobile App', priceSuffix: '/H' },
	{ value: 'monthly', label: 'Branding', priceSuffix: '/H' },
	{ value: 'annually', label: 'E-commerce', priceSuffix: '/H' },
	{ value: 'annually', label: 'WordPress', priceSuffix: '/H' },
]
const tiers = [
	{
		name: 'LITE',
		id: 'tier-freelancer',
		href: '#',
		price: { monthly: '$15', annually: '$144' },
		description: 'Best for new companies.',
		subDescription: 'This is our most affordable plan to get started',
		features: [
			'Unlimited Sending',
			'Email Marking',
			'Send Newsletter',
			'Marketing Automation',
			'Unlimited Revision',],
		mostPopular: false,
	},
	{
		name: 'PLUS',
		id: 'tier-startup',
		href: '#',
		price: { monthly: '$30', annually: '$288' },
		description: 'Best for performance marketers',
		subDescription: '60% of our clients choose this plan. Get best value for best pricing.',
		features: [
			'Unlimited Sending',
			'Email Marking',
			'Send Newsletter',
			'Marketing Automation',
			'Unlimited Revision',
			'Unlimited Sending',
			'Email Marking',
			'Send Newsletter',
			'Marketing Automation',
			'Unlimited Revision',
		],
		mostPopular: true,
	},
	{
		name: 'PROFESSIONAL',
		id: 'tier-enterprise',
		href: '#',
		price: { monthly: '$60', annually: '$576' },
		description: 'Best for scaling.',
		subDescription: 'Multiple communication channels & advanced reporting.',
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
	{
		name: 'ENTERPRISE',
		id: 'tier-enterprise',
		href: '#',
		price: { monthly: '$60', annually: '$576' },
		description: 'Best for large companies',
		subDescription: 'For larger businesses or those seeking advanced services & tools',
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



const Pricing = () => {
	const [frequency, setFrequency] = useState(frequencies[0])
	return (
		<>
			<Head>
				<title>Pricing DEVSOFUL</title>
			</Head>
			<PricingPageHeader />
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						{/* <h2 className="text-base font-Bebas leading-7 text-indigo-600">Pricing</h2> */}
						<p className="mt-2 text-4xl font-Bebas tracking-tight text-gray-900 sm:text-5xl">
							Pricing plans
                        </p>
					</div>

					<div className="mt-10 flex justify-center">
						<RadioGroup
							value={frequency}
							onChange={setFrequency}
							className="grid grid-cols-6 gap-x-1 rounded-full p-2 text-center text-xs font-Bebas leading-5 ring-1 ring-inset ring-gray-200"
						>
							<RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
							{frequencies.map((option) => (
								<RadioGroup.Option
									key={option.value}
									value={option}
									className={({ checked }) =>
										classNames(
											checked ? 'bg-primary-100 text-white' : 'ring-1 ring-inset ring-primary-100 text-primary-100',
											'cursor-pointer rounded-full px-2.5 py-2'
										)
									}
								>
									<span>{option.label}</span>
								</RadioGroup.Option>
							))}
						</RadioGroup>
					</div>
					<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-2 lg:mx-6 lg:max-w-none lg:grid-cols-4 ring-1 ring-gray-200 rounded-xl">
						{tiers.map((tier) => (
							<div
								key={tier.id}
								className={classNames(
									tier.mostPopular ? 'm-auto p-auto ring-2 ring-primary-100 rounded-3xl' : 'rounded',
									'p-8 xl:p-10'
								)}
							>
								<div className="flex items-center justify-center">
									{tier.mostPopular ? (
										<p className=" flex items-center justify-center w-full rounded-full bg-primary-100 px-12 py-2 text-xs font-Bebas leading-5 text-white">
											RECOMMENDED
                                        </p>
									) : null}

								</div>
								<h3
									id={tier.id}
									className={classNames(
										tier.mostPopular ? 'text-primary-100 mt-2' : 'text-gray-900',
										'text-lg font-Bebas leading-8 flex items-center justify-center'
									)}
								>
									{tier.name}
								</h3>
								<p className="flex items-center justify-center font-Bebas mt-2 text-xs leading-6 text-gray-600">{tier.description}</p>
								<p className="flex items-center justify-center mt-0 text-xs text-center text-gray-500">{tier.subDescription}</p>
								<p className="flex items-center justify-center mt-4 flex items-baseline gap-x-1">
									<span className="text-4xl font-Bebas tracking-tight text-primary-100">{tier.price[frequency.value]}</span>
									<span className="text-sm font-Bebas leading-6 text-primary-100">{frequency.priceSuffix}</span>
								</p>

								<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
									{tier.features.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<CheckIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
											{feature}
										</li>
									))}
								</ul>
								<a
									href={tier.href}
									aria-describedby={tier.id}
									className={classNames(
										tier.mostPopular
											? 'bg-primary-100 text-white shadow-sm hover:bg-indigo-500'
											: 'text-primary-100 ring-1 ring-inset ring-primary-100 hover:ring-indigo-300',
										'mt-6 block rounded-full py-2 px-3 text-center text-sm font-Bebas leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									)}
								>
									GET STARTED
                                </a>
							</div>
						))}
					</div>
				</div>
			</div>
			<footer className="">
				<Footer />
			</footer>
		</>
	)
}

Pricing.getLayout = function getLayout(Contact) {
	return (
		<HomeLayout>
			{Contact}
		</HomeLayout>
	)
}

export default Pricing;