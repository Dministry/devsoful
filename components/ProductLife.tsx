import Image from 'next/image'
import ProdShape from '../public/Product_Shapes.png'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ArrowLeftIcon, ArrowDownOnSquareStackIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "DISCOVER",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "SCREENING",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "CONCEPT DEVELOPMENT",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "PRODUCT DEVELOPMENT",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "COMMERCIALIZATION AND ROLLOUT",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]
const ProductLife = () => {
    return (
        <div className="w-3/4 my-20 mx-auto md:px-6">
            <h2 className="mt-16 mb-2 text-center text-3xl font-Bebas">
                FULL PRODUCT <span className="text-primary-100">LIFE CYCLE </span>
            </h2>
            <p className="text-gray-500 mb-8 dark:text-neutral-300 flex items-center justify-center text-center font-Monserat text-sm">
                Your products create interest and drive sales. They're what keeps customers coming back. But taking an idea from inception to launch is a massive task that needs to be approached seriously.
                </p>
            <div className="flex items-center justify-center">
                <Image
                    src={ProdShape}
                    alt="Product Shape"
                />
            </div>
            {/* Dropdown Section */}
            <div className="bg-white mt-16">
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
                                                    <span className="text-base font-Bebas leading-7 text-primary-100">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base leading-7 text-gray-500 font-Monserat text-sm">{faq.answer}</p>
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
    )
}

export default ProductLife



