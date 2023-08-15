import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import GeneralNav from '../components/GeneralNav'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShareIcon } from '@heroicons/react/24/outline'
import ImgContact from '../public/contactHeroSection.png'

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


export default function AboutPageHeader() {
    return (
        <div className="">
            <Head>
                <title>Devsoful</title>
                <meta name="description" content="Generated by create next app" />

                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main >

                {/* Navar Start */}
                <GeneralNav />
                {/* NavBar End */}
                <div>

                    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-16">
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
                                <h2 className="flex items-center justify-center text-4xl font-Bebas tracking-tight text-white sm:text-2xl text-center">WELCOME TO DEVSOFUL</h2>
                                <h2 className="flex items-center justify-center mt-2 text-lg font-Bebas text-white sm:text-sm text-center">One PARTNER FOR ALL YOUR DIGITAL NEEDS.</h2>
                            </div>
                            <span className="flex items-center justify-center text-white text-center">
                                <p className="text-gray-200 font-Monserat max-w-4xl mt-3 dark:text-neutral-300 text-xs flex items-center justify-center text-center">
                                    At Devsoful, we are passionate about crafting exceptional web experiences that leave a lasting impression. As a dynamic team of creative minds, we specialize in delivering cutting-edge solutions that transform businesses into online success stories. Whether you're a startup seeking a powerful digital presence or an established brand looking to revamp your online identity, we've got you covered.
                                </p>
                            </span>

                        </div>
                        <div className="flex items-center justify-center gap-8 mt-8">
                            <button className="rounded-full bg-transparent hover:bg-white text-white font-Bebas hover:text-primary-100 py-2 px-4 border border-white hover:border-transparent rounded">
                                SEE OUR WORK
                            </button>
                            <button className="rounded-full bg-white hover:bg-white text-primary-100 font-Bebas hover:text-primary-100 py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                VIEW PRICING
                            </button>
                        </div>

                    </div>

                </div>
            </main>

        </div>
    )
}
