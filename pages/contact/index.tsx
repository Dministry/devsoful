import HomeLayout from "../../layouts/MainLayout";
import Image from "next/image";
import Head from "next/head";
import Footer from '../../components/Footer'
import ContactPageHeader from '../../components/ContactPageHeader'
import { FaPhone, FaAddressBook, FaInbox } from "react-icons/fa";
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Recaptcha from '../../components/Recaptcha';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Contact = () => {

    const [agreed, setAgreed] = useState(false);
    const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);
    const handleRecaptchaChange = (value) => {
        setRecaptchaVerified(!!value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    };


    return (
        <>
            <Head>
                <title>Contact DEVSOFUL</title>
            </Head>
            <ContactPageHeader />

            <div className="isolate border bg-white px-6 py-2 sm:py-24 lg:px-8">
                <form action="#" method="POST" className="mx-auto sm:mt-16 mt-4 max-w-3xl sm:mt-2 border border-grey-300 sm:p-16 p-8 rounded-xl">
                    <div className="grid grid-cols-1 gap-x-8 sm:gap-y-6 gap-y-3 sm:grid-cols-2 font-Monserat">
                        <div>
                            {/* <label htmlFor="first-name" className="block text-sm font-Bebas leading-6 text-gray-900">
                                First name
                            </label> */}
                            <div className="mt-1">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2.5">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2.5">
                                <input
                                    placeholder="Telephone"
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2.5">
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    autoComplete="subject"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        {/* <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-Bebas leading-6 text-gray-900">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">

                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                                <input
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
                        <div className="sm:col-span-2">

                            <div className="mt-2.5">
                                <textarea
                                    placeholder="Tell Us Your Idea Here"
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                        {/* Switch */}
                        <div className="flex items-center justify-center col-span-full">
                            <Recaptcha onChange={handleRecaptchaChange} />
                        </div>

                        {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-1">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className={classNames(
                                        agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                        'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                    )}
                                >
                                    <span className="sr-only">Agree to policies</span>
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            agreed ? 'translate-x-3.5' : 'translate-x-0',
                                            'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                        )}
                                    />
                                </Switch>
                            </div>
                            <Switch.Label className="text-sm leading-6 text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-Bebas text-indigo-600">
                                    privacy&nbsp;policy
                        </a>
                                .
                        </Switch.Label>
                        </Switch.Group> */}
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="block w-full rounded-3xl bg-primary-100 px-3.5 py-2.5 text-center text-sm font-Monserat text-white shadow-sm hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </>
    )
}

Contact.getLayout = function getLayout(Contact) {
    return (
        <HomeLayout>
            {Contact}
        </HomeLayout>
    )
}

export default Contact;