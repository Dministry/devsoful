import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import HomePageHeader from '../components/HomePageHeader'
import OurWork from '../components/OurWork'
import LatestWork from '../components/LatestWork'
import Modal from '../components/Modal'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShareIcon } from '@heroicons/react/24/outline'
import ProductLife from '../components/ProductLife';
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Devsoful</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main >
        {/* Navar Start */}
        <HomePageHeader />
        {/* NavBar End */}
        <OurWork />
        
        <ProductLife />
        <Modal />
        {/* <LatestWork /> */}

      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  )
}
