import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import HomeNav from '../components/HomeNav'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
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
                <meta name="description" content="Devsoful Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                {/* Navar Start */}
                <HomeNav />
                {/* NavBar End */}
            </main>
            <HeroSection />
        </div>
    )
}
