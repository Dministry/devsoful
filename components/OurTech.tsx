
import { Carousel, CarouselProps, IconButton } from "@material-tailwind/react";
import { CarouselStylesType } from "@material-tailwind/react";
import Image from 'next/image'
import ImgSld from '../public/image 7.png'
import ImgWork1 from '../public/reactImg.png'
import ImgWork2 from '../public/nodeImg.png'
import ImgWork3 from '../public/mDotNetImg.png'
import ImgWork4 from '../public/angularImg.png'
import AustImg from '../public/AustinSkys_Desktop_Tablet_1.png'
import AustImg2 from '../public/AustinSkys_Desktop_Tablet_2.png'
import AustImg3 from '../public/AustinSkys_Desktop_Tablet_3.png'
import AustImg4 from '../public/AustinSkys_Desktop_Tablet_4.png'
import AustImg5 from '../public/AustinSkys_Desktop_Tablet_5.png'
import AustImg6 from '../public/AustinSkys_Desktop_Tablet_6.png'
import WebImg from '../public/webIcon.png'
import SearchOpt from '../public/searchEngine.png'
import Maint from '../public/maintenance.png';
import StratCons from '../public/strategic.png'
import ConOpt from '../public/optimization.png'
import Shopify from '../public/shopifyPlus.png'



const OurTech = () => {
    return (
        <div className="pb-6">
            <h2 className="mb-1 mt-10 text-center text-3xl font-bold text-primary-100">
                OUR <span className="text-primary-100">TECHNOLOGIES </span>
            </h2>
            <span className="flex items-center justify-center text center">
                <p className="text-gray-400 font-thin max-w-xl dark:text-neutral-300 text-sm font-serif flex items-center justify-center text-center">
                    We build market-focused brands that connect
                </p>
            </span>
            <Carousel
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 sm:left-28 left-2 -translate-y-2/4 bg-white rounded-full drop-shadow-2xl text-gray-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 sm:!right-28 !right-2 -translate-y-2/4 bg-white rounded-full drop-shadow-2xl text-gray-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="h-2 w-2 sm:h-4 sm:w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21"
                            />
                        </svg>
                    </IconButton>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute sm:bottom-4 -bottom-1 left-2/4 z-50 flex -translate-x-2/6 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block sm:h-4 sm:w-4 h-2 w-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "sm:w-4 sm:h-4 h-2 w-2 bg-primary-100" : "w-4 border border-primary-100 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}

                transition={{ duration: 2 }} className="pb-1 rounded-xl">
                <div className="container mx-auto px-5 sm:py-10 py-1 lg:px-32 lg:pt-4">
                    <div className="sm:py-4 py-2">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-2 sm:gap-x-8 gap-y-2 sm:gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                <div className="border border-gray-300 px-4 py-8 rounded-lg">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork1}
                                        alt="React Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className="border border-gray-300 px-4 py-8 rounded-lg">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork2}
                                        alt="Node Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className="border border-gray-300 px-4 py-8 rounded-lg">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork3}
                                        alt="DotNet Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className="border border-gray-300 px-4 py-8 rounded-lg">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork4}
                                        alt="Angular Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Slider 2 */}
                {/* <div className="container mx-auto px-5 py-10 lg:px-32 lg:pt-12">
                    <div className="py-24 sm:py-2">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                <div className="border border-gray-300 px-4 py-8 rounded-lg">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork1}
                                        alt="React Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className="border border-primary-100 p-4">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork2}
                                        alt="Node Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className="border border-primary-100 p-4">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork3}
                                        alt="DotNet Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className="border border-primary-100 p-4">
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={ImgWork4}
                                        alt="Angular Logo"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
            </Carousel>
            {/* Section 1 */}
            <div className="divide-y divide-grey-900">
                <div className="inline-flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl sm:mx-auto mx-12">
                    <div className="flex flex-col justify-start mt-1 sm:mt-16 max-w-md items-start flex-1 ">
                        <h2 className="mx-auto sm:mx-0 text-start sm:text-4xl text-xl font-bold">
                            <span className="text-primary-100">UI/UX DESIGN</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-thin text-sm mt-2">
                            Bring your brand to life online with a bespoke website that boosts engagement and brings a return on creativity.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="flex items-center mt-4 sm:w-3/4 w-full rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-semibold hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                TAKE ME THERE
                     </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Image
                            src={AustImg}
                            alt="Austin"
                        />
                    </div>
                </div>
                {/* Section 2 */}
                <div className="sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl sm:mx-auto mx-12">
                    <div className="mt-8">
                        <Image
                            src={AustImg2}
                            alt="Austin"
                        />
                    </div>
                    <div className="flex flex-col justify-start mt-1 sm:mt-28 max-w-md items-start flex-2">
                        <h2 className="mx-auto sm:mx-0 sm:text-start text-center sm:text-4xl text-xl font-bold">
                            <span className="text-primary-100">WEB DEVELOPMENT</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-thin text-sm mt-2">
                            We’ll build your site to suit your specific needs, creating the custom functions to make it faster and more secure.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="w-full sm:w-3/4 flex items-center mt-4 rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-semibold hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                TAKE ME THERE
                     </button>
                        </div>
                    </div>
                </div>
                {/* Section 3 */}
                <div className="inline-flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl                    sm:mx-auto mx-12">
                    <div className="flex flex-col justify-start mt-1 sm:mt-28 max-w-md items-start flex-1">
                        <h2 className="mx-auto sm:mx-0 text-start sm:text-4xl text-xl font-bold">
                            <span className="text-primary-100">WEB APPLICATION</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-thin text-sm mt-2">
                            Devsoful combines strategic direction with creative design to build a unique brand identity that your customers want to be a part of.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="flex items-center mt-4 sm:w-3/4 w-full rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-semibold hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                TAKE ME THERE
                     </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Image
                            src={AustImg3}
                            alt="Austin"
                        />
                    </div>
                </div>
                {/* Our Services */}
                <div className="w-full my-32 mx-auto md:px-6 bg-primary-100">
                    <section className="lg:mb-6 mx-auto w-3/4 mb-2 text-center lg:text-left">
                        <h2 className="mb-2 text-center text-white text-3xl font-bold">
                            OUR SERVICES
                         </h2>
                        <p className="text-white font-thin mb-8 dark:text-neutral-300 flex items-center justify-center">
                            We build market-focused brands that connect
                        </p>
                        <div className="grid gap-x-6 lg:grid-cols-3 items-center justify-center">
                            {/* Card 1 */}
                            <div className="mb-12 lg:mb-0  border border-gray-300 rounded-lg p-8">
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                    <Image src={WebImg} alt="web" />
                                </div>
                                <h5 className="mb-4 text-lg font-bold flex items-center justify-center text-center text-white">WEB DESIGN AND DEVELOPMENT</h5>
                                <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center">
                                    Guided by your brand style and personality, we create beautiful digital experiences in sync with your target market.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="mb-12 lg:mb-0  border border-gray-300 rounded-lg p-8">
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                    <Image src={SearchOpt} alt="search optimization" />
                                </div>
                                <h5 className="mb-4 text-lg font-bold flex items-center justify-center">SEARCH ENGINE OPTIMIZATION</h5>
                                <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                    With over 10 years of experience, the way we do SEO pleases both search engines and website traffic.
                            </p>
                            </div>
                            {/* Card 3 */}
                            <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                    <Image src={Maint} alt="maintenance" />
                                </div>
                                <h5 className="mb-4 text-lg font-bold flex items-center justify-center">WEBSITE MAINTENANCE</h5>
                                <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                    Weberous Tickets is our answer to website maintenance and edits, for your peace of mind.
                                </p>
                            </div>
                            {/* Card 4 */}
                            <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                    <Image src={StratCons} alt="Strategic" />
                                </div>
                                <h5 className="mb-4 text-lg font-bold flex items-center justify-center">STRATEGIC CONSULTATION</h5>
                                <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                    We study your analytics, create targets, and come up with ways to hit them.
                                </p>
                            </div>
                            {/* Card 5 */}
                            <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                    <Image src={ConOpt} alt="Con" />
                                </div>
                                <h5 className="mb-4 text-lg font-bold flex items-center justify-center">CONVERSION OPTIMIZATION</h5>
                                <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                    Changing a layout, or strategically positioning your products can change the whole game.
                                </p>
                            </div>
                            {/* Card 6 */}
                            <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                    <Image src={Shopify} alt="shopify" />
                                </div>
                                <h5 className="mb-4 text-lg font-bold flex items-center justify-center">SHOPIFY PLUS</h5>
                                <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                    Enterprise eCommerce solutions with a partner you can trust a nd has been doing it for years.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* <CtaButton /> */}
                </div>
            </div>
        </div>
    );
}

export default OurTech