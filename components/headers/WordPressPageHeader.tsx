import Head from 'next/head'
import Styles from '../../styles/Home.module.css'
import HeroSection from '../../components/HeroSection'
import Sidebar from '../../components/Sidebar'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShareIcon } from '@heroicons/react/24/outline'
import ImgContact from '../../public/serviceHeroSection.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]


export default function WordPressPageHeader() {
    return (
        <div className="">
            <Head>
                <title>Service -WordPress</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main >
                {/* Navar Start */}
                <Disclosure as="nav" className="bg-primary-200">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                            <a
                                                href="#"
                                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                                            >
                                                <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                                            </a>
                                            {/* <a
                                                href="#"
                                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                            >
                                                Team
                                            </a> */}

                                        </div>

                                    </div>
                                    <div className="flex flex-shrink-0 h-8 w-auto items-center ml-32 justify-center text-white">
                                        <h2 className="mt-16 mb-8 text-center text-xl font-bold">
                                            DEVSOFUL
                                        </h2>
                                        {/* <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        /> */}
                                    </div>

                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button
                                            type="button"
                                            className="relative rounded-full mr-12 p-1 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Share</span>
                                            <ShareIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>


                                        <button
                                            type="button"
                                            className="relative rounded-full bg-white hover:text-white focus:outline-none focus:ring-offset-2 px-3.5 py-2.5 text-sm font-semibold text-primary-100 shadow-sm hover:bg-primary-100 w-32"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="">CONTACT US</span>
                                        </button>

                                        {/* Profile dropdown */}

                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 pb-4 pt-2">
                                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                                    >
                                        About
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        Team
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        Projects
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        Calendar
                                </Disclosure.Button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {/* NavBar End */}
                <div>


                    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                        <Image
                            src={ImgContact}
                            alt="Contact Image Section"
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"

                        />

                        <div
                            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div
                            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto lg:mx-0">
                                <h2 className="flex items-center justify-center text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">WORDPRESS</h2>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}
