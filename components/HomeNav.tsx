import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShareIcon } from '@heroicons/react/24/outline'
import DropdownNav from '../components/DropdownNav'

const navigation = [
    { name: 'Home', href: '/' },
    // { name: 'Service', href: '/service', children: [{ name: 'Branding', href: '/service/branding' }] },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-primary-100">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex flex-1">
                    <div className="lg:hidden hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-Bebas leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                    <h1 className="sm:h-8 h-4 w-auto text-white font-Bebas">DEVSOFUL</h1>
                </a>
                <div className="flex flex-1 justify-end">
                    <button
                        type="button"
                        className="relative rounded-full sm:mr-12 p-1 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Share</span>
                        <ShareIcon className="sm:h-6 sm:w-6 h-4 2-4" aria-hidden="true" />
                    </button>
                    <a href="/contact" className="text-xs font-Monserat font-Bebas leading-6 text-primary-100 bg-white sm:p-2 p-1 rounded-full">
                        GET A QUOTE <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-gray-900 opacity-95 px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-1">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            /> */}
                            <h1 className="h-6 w-auto text-gray-100 font-Bebas">DEVSOFUL</h1>
                        </a>
                        <div className="flex flex-1 justify-end">
                            <button
                                type="button"
                                className="relative rounded-full mr-12 p-1 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Share</span>
                                <ShareIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <a href="#" className="text-sm font-Bebas leading-6 text-gray-100">
                                CONTACT US <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 space-y-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="mx-auto text-center block rounded-full px-3 py-2 text-white font-Bebas leading-7 hover:text-primary-100 hover:bg-gray-50"
                            >
                                {item.name}
                            </a>
                        ))}
                        <DropdownNav />
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
