
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image'
import ImgSld from '../public/image 7.png'
import ImgWork1 from '../public/Works_1.png'
import ImgWork2 from '../public/Works_2.png'
import ImgWork3 from '../public/Works_3.png'
import ImgWork4 from '../public/Works_4.png'
import ImgWork5 from '../public/Works_5.png'
import ImgWork6 from '../public/Works_6.png'

const LatestWork = () => {
    return (
        <div className="rounded-xl bg-primary-100 pb-6">
            <Carousel transition={{ duration: 2 }} className="pb-1">
                <div className="container mx-auto px-5 py-12 lg:px-32 lg:pt-12">
                    <h2 className="mb-4 text-center text-3xl font-bold text-white">
                        OUR <span className="text-white">LATEST </span>WORKS
                    </h2>
                    <div className="-m-0 flex flex-wrap md:-m-0">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork1}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork2}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork3}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork4}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork5}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork6}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="container mx-auto px-5 py-12 lg:px-32 lg:pt-12">
                    <h2 className="mb-4 text-center text-3xl font-bold text-white">
                        OUR <span className="text-white">LATEST </span>WORKS
                    </h2>
                    <div className="-m-0 flex flex-wrap md:-m-0">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork1}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork2}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork3}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork4}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork5}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={ImgWork6}
                                    alt='Picture of a house'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
            <button className="mx-auto flex items-center rounded-full justify-center bg-transparent hover:bg-white text-white font-semibold hover:text-primary-100 py-2 px-4 border border-white hover:border-transparent rounded">
                GET TO KNOW OUR WORK
            </button>
        </div>
    );
}

export default LatestWork