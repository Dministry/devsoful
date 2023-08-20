import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

import { Carousel } from "@material-tailwind/react";
import Image from 'next/image'
import ImgSld from '../public/image 7.png'
import ImgWork1 from '../public/Works_1.png'
import ImgWork2 from '../public/Works_2.png'
import ImgWork3 from '../public/Works_3.png'
import ImgWork4 from '../public/Works_4.png'
import ImgWork5 from '../public/Works_5.png'
import ImgWork6 from '../public/Works_6.png'
import { FaSquareFull } from 'react-icons/fa';

export default function Modal() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)

  return (
    <>
      {/* Carousel Start */}
      <div className="rounded-xl bg-primary-100 pb-6">
        <Carousel transition={{ duration: 2 }} className="pb-1">
          <div className="container mx-auto px-5 py-12 lg:px-32 lg:pt-12">
            <h2 className="mb-4 text-center text-3xl font-Bebas text-white">
              OUR <span className="text-white">LATEST </span>WORKS
                    </h2>
            <div className="-m-0 flex flex-wrap md:-m-0">
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork1}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork2}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork3}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork4}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork5}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork6}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="container mx-auto px-5 py-12 lg:px-32 lg:pt-12">
            <h2 className="mb-4 text-center text-3xl font-Bebas text-white">
              OUR <span className="text-white">LATEST </span>WORKS
                    </h2>
            <div className="-m-0 flex flex-wrap md:-m-0">
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork1}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork2}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork3}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork4}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork5}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={ImgWork6}
                    alt='Picture of a house'
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>

        </Carousel>
        <button className="mx-auto flex items-center rounded-full justify-center bg-transparent hover:bg-white text-white font-Bebas hover:text-primary-100 py-2 px-4 border border-white hover:border-transparent rounded">
          SEE ALL PROJECTS
            </button>
      </div>
      {/* Carousel End */}
      {/* Modal 1 */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaSquareFull className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div> */}
                  <div className="sm:flex sm:items-start">
                    <Image src={ImgWork1} alt="test" />

                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-Bebas leading-6 text-primary-100">
                        PROJECT NAME
                    </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 font-Monserat">
                          Lorem ipsum dolor sit amet consectetur. A dictum nunc at molestie montes est quisque gravida pulvinar. Porta enim pharetra consectetur tortor. Pulvinar eu nulla metus ultrices enim sed sit dui est. Nunc mattis aliquam diam pulvinar. 
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    {/* <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                  </button> */}
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-3 py-2 text-sm font-Bebas text-primary-100 shadow-sm ring-1 ring-inset ring-primary-100 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      SEE PRICING
                  </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Modal 2 */}
      <Transition.Root show={open1} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen1}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Deactivate account
                    </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently removed
                          from our servers forever. This action cannot be undone.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen1(false)}
                    >
                      Deactivate 2
                  </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen1(false)}
                    >
                      Cancel
                  </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
