import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShareIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomePageHeader() {
    return (
        <div className="">
            <Head>
                <title>Devsoful</title>
                <meta name="description" content="Generated by create next app" />

                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main >

                {/* Navar Start */}
                <Disclosure as="nav" className="bg-primary-100">
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
                                    <div className="flex flex-shrink-0 h-8 w-auto items-center justify-center text-white">
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
                                        Dashboard
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

            </main>
            <HeroSection />
        </div>
    )
}
