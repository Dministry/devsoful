import AboutPageHeader from '../../components/AboutPageHeader';
import Head from 'next/head';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ArrowLeftIcon, ArrowDownOnSquareStackIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "DISCOVER",
        answer:
            "Our team is composed of talented designers, developers, and strategists who are experts in their respective fields. With a wealth of experience, we know how to elevate your brand and create a compelling online presence that resonates with your target audience.",
        icon: MinusSmallIcon,
    },
    {
        question: "SCREENING",
        answer:
            "Our team is composed of talented designers, developers, and strategists who are experts in their respective fields. With a wealth of experience, we know how to elevate your brand and create a compelling online presence that resonates with your target audience.",
        icon: MinusSmallIcon,
    },
    {
        question: "CONCEPT DEVELOPMENT",
        answer:
            "Our team is composed of talented designers, developers, and strategists who are experts in their respective fields. With a wealth of experience, we know how to elevate your brand and create a compelling online presence that resonates with your target audience.",
        icon: MinusSmallIcon,
    },
    {
        question: "PRODUCT DEVELOPMENT",
        answer:
            "Our team is composed of talented designers, developers, and strategists who are experts in their respective fields. With a wealth of experience, we know how to elevate your brand and create a compelling online presence that resonates with your target audience.",
        icon: MinusSmallIcon,
    },
    {
        question: "COMMERCIALIZATION AND ROLLOUT",
        answer:
            "Our team is composed of talented designers, developers, and strategists who are experts in their respective fields. With a wealth of experience, we know how to elevate your brand and create a compelling online presence that resonates with your target audience.",
        icon: MinusSmallIcon,
    },
    // More questions...
]

const About = () => {
    return (
        <>
            <Head>
                <title>Contact DEVSOFUL</title>
            </Head>
            <AboutPageHeader />
            <div className="w-3/4 my-20 mx-auto md:px-6">
                <h2 className="mt-16 mb-2 text-center text-3xl font-bold">
                    OUR <span className="text-primary-100">PILLARS </span>
                </h2>
                <p className="text-gray-500 mb-2 dark:text-neutral-300 flex items-center justify-center text-center">
                    Our greatest satisfaction is our clients success. Online presence is one of the most important aspects of today's business. We understand business and combine it with the high level technical solutions to become the only partner you will ever need for your brand to excel and concur new heights.
                </p>

                {/* Dropdown Section */}
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-2 sm:py-32 lg:px-8 lg:py-6">
                        <div className=" max-w-4xl">
                            {/* Heading Here */}
                            <dl className="mt-1 space-y-6">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="p-6 pb-6 border border-gray-200 rounded-lg divide-y divide-gray-900/10">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-base font-semibold leading-7 text-primary-100">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <MinusSmallIcon className="h-4 w-4 text-primary-100" aria-hidden="true" />
                                                            ) : (
                                                                    <ChevronDownIcon className="h-4 w-4 text-primary-100" aria-hidden="true" />
                                                                )}
                                                        </span>
                                                    </Disclosure.Button>
                                                    {/* <faq.icon className="h-4 w-4 text-primary-100" aria-hidden="true" /> */}
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-xs leading-7 text-gray-500">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About