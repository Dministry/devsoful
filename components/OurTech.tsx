
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
import { StarIcon } from '@heroicons/react/20/solid'
import Lotfi from '../public/lotfiImg.png'


const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
        date: 'July 16, 2021',
        datetime: '2021-07-16',
        author: 'Emily Selman',
        avatarSrc:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
        id: 2,
        rating: 5,
        content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        author: 'Hector Gibbons',
        avatarSrc:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const OurTech = () => {
    return (
        <div className="pb-6">
            <h2 className="mb-1 mt-10 text-center text-3xl font-Bebas text-primary-100">
                OUR <span className="text-primary-100">TECHNOLOGIES </span>
            </h2>
            <span className="flex items-center justify-center text center">
                <p className="text-gray-400 font-Monserat max-w-xl dark:text-neutral-300 text-xs font-serif flex items-center justify-center text-center">
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
                        <h2 className="mx-auto sm:mx-0 text-start sm:text-4xl text-xl font-Bebas">
                            <span className="text-primary-100">UI/UX DESIGN</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-Monserat text-xs mt-2">
                            Bring your brand to life online with a bespoke website that boosts engagement and brings a return on creativity.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="flex items-center mt-4 sm:w-3/4 w-full rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
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
                        <h2 className="mx-auto sm:mx-0 sm:text-start text-center sm:text-4xl text-xl font-Bebas">
                            <span className="text-primary-100">WEB DEVELOPMENT</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-Monserat text-xs mt-2">
                            We’ll build your site to suit your specific needs, creating the custom functions to make it faster and more secure.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="w-full sm:w-3/4 flex items-center mt-4 rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                TAKE ME THERE
                     </button>
                        </div>
                    </div>
                </div>
                {/* Section 3 */}
                <div className="inline-flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl                    sm:mx-auto mx-12">
                    <div className="flex flex-col justify-start mt-1 sm:mt-28 max-w-md items-start flex-1">
                        <h2 className="mx-auto sm:mx-0 text-start sm:text-4xl text-xl font-Bebas">
                            <span className="text-primary-100">WEB APPLICATION</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-Monserat text-xs mt-2">
                            Devsoful combines strategic direction with creative design to build a unique brand identity that your customers want to be a part of.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="flex items-center mt-4 sm:w-3/4 w-full rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
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


            </div>
            {/* Our Services */}
            <div className="w-full my-3 mx-auto md:px-12 py-20 bg-primary-100">
                <section className="lg:mb-6 mx-auto w-3/4 mb-2 text-center lg:text-left">
                    <h2 className="mb-2 text-center text-white text-3xl font-Bebas">
                        OUR SERVICES
                         </h2>
                    <p className="text-white font-Monserat mb-8 dark:text-neutral-300 flex items-center justify-center text-xs">
                        We build market-focused brands that connect
                        </p>
                    <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 items-center justify-center">
                        {/* Card 1 */}
                        <div className="mb-12 lg:mb-0 border border-gray-300 py-14 px-4 rounded-lg w-full">
                            <div className="mb-2 flex items-center justify-center dark:text-danger-500 lg:justify-center">
                                <Image src={WebImg} alt="search optimization" className="w-20 h-20" />
                            </div>
                            <h5 className="mb-2 text-lg font-Bebas flex items-center justify-center text-center text-white">WEB DESIGN AND DEVELOPMENT</h5>
                            <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center text-xs font-Monserat">
                                Guided by your brand style and personality, we create beautiful digital experiences in sync with your target market.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="mb-12 lg:mb-0 border border-gray-300 py-14 px-4 rounded-lg w-full">
                            <div className="mb-2 flex items-center justify-center dark:text-danger-500 lg:justify-center">
                                <Image src={SearchOpt} alt="search optimization" className="w-20 h-20" />
                            </div>
                            <h5 className="mb-2 text-lg font-Bebas flex items-center justify-center text-center text-white">SEARCH ENGINE OPTIMIZATION</h5>
                            <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center text-xs font-Monserat">
                                With over 10 years of experience, the way we do SEO pleases both search engines and website traffic.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="mb-12 lg:mb-0 border border-gray-300 py-14 px-4 rounded-lg w-full">
                            <div className="mb-2 flex items-center justify-center dark:text-danger-500 lg:justify-center">
                                <Image src={Maint} alt="maintenance" className="w-20 h-20" />
                            </div>
                            <h5 className="mb-2 text-lg font-Bebas flex items-center justify-center text-center text-white">WEBSITE MAINTENANCE</h5>
                            <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center text-xs font-Monserat">
                                Weberous Tickets is our answer to website maintenance and edits, for your peace of mind.
                                </p>
                        </div>
                        {/* Card 4 */}
                        <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                            <div className="mb-2 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                <Image src={StratCons} alt="Strategic" className="w-20 h-20" />
                            </div>
                            <h5 className="mb-2 text-lg font-Bebas flex items-center justify-center text-center text-white">STRATEGIC CONSULTATION</h5>
                            <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center text-xs font-Monserat">
                                We study your analytics, create targets, and come up with ways to hit them.
                                </p>
                        </div>
                        {/* Card 5 */}
                        <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                            <div className="mb-2 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                <Image src={ConOpt} alt="Con" className="w-20 h-20" />
                            </div>
                            <h5 className="mb-2 text-lg font-Bebas flex items-center justify-center text-center text-white">CONVERSION OPTIMIZATION</h5>
                            <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center text-xs font-Monserat">
                                Changing a layout, or strategically positioning your products can change the whole game.
                                </p>
                        </div>
                        {/* Card 6 */}
                        <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                            <div className="mb-2 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                <Image src={Shopify} alt="shopify" className="w-20 h-20" />
                            </div>
                            <h5 className="mb-2 text-lg font-Bebas flex items-center justify-center text-center text-white">SHOPIFY PLUS</h5>
                            <p className="text-gray-200 dark:text-neutral-300 flex items-center justify-center text-center text-xs font-Monserat">
                                Enterprise eCommerce solutions with a partner you can trust a nd has been doing it for years.
                                </p>
                        </div>
                    </div>
                </section>
                {/* <CtaButton /> */}
            </div>
            {/* Our Service Ends */}

            {/* Section 1 */}
            <div className="sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl sm:mx-auto mx-12">
                <div className="mt-8">
                    <Image
                        src={AustImg4}
                        alt="Austin"
                    />
                </div>
                <div className="flex flex-col justify-start mt-1 sm:mt-28 max-w-md items-start flex-2">
                    <h2 className="mx-auto sm:mx-0 sm:text-start text-center sm:text-4xl text-xl font-Bebas">
                        <span className="text-primary-100">BRANDING</span>
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-Monserat text-xs mt-2">
                        With a proven track record for game-changing results, our marketing experts design digital campaigns that captivate and convert.
                </p>
                    <div className="w-full sm:w-3/6">
                        <button className="w-full sm:w-3/4 flex items-center mt-4 rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                            TAKE ME THERE
                     </button>
                    </div>
                </div>
            </div>
            {/* Section 2 */}
            <div className="divide-y divide-grey-900">
                <div className="inline-flex flex-col-reverse sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl sm:mx-auto mx-12">
                    <div className="flex flex-col justify-start mt-1 sm:mt-20 max-w-md items-start flex-1 ">
                        <h2 className="mx-auto sm:mx-0 text-start sm:text-4xl text-xl font-Bebas">
                            <span className="text-primary-100">E-COMMERCE</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-Monserat text-xs mt-2">
                            Reinvent your online store with an expert team who know what it takes to turn clicks into customers and keep them coming back.
                </p>
                        <div className="w-full sm:w-3/6">
                            <button className="flex items-center mt-4 sm:w-3/4 w-full rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                TAKE ME THERE
                     </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Image
                            src={AustImg5}
                            alt="Austin"
                        />
                    </div>
                </div>
                {/* Section 3 */}
                <div className="sm:grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-4 sm:mt-24 mt-1 mb-5 max-w-5xl sm:mx-auto mx-12">
                    <div className="mt-8">
                        <Image
                            src={AustImg6}
                            alt="Austin"
                        />
                    </div>
                    <div className="flex flex-col justify-start mt-1 sm:mt-24 max-w-md items-start flex-1">
                        <h2 className="mx-auto sm:mx-0 text-start sm:text-4xl text-xl font-Bebas">
                            <span className="text-primary-100">WORDPRESS</span>
                        </h2>
                        <p className="text-gray-500 dark:text-neutral-300 sm:text-start text-center font-Monserat text-xs mt-2">
                            Our approach decouples WordPress CMS from the front end technology to tighten security and improve overall speed.
                        </p>
                        <div className="w-full sm:w-3/6">
                            <button className="flex items-center mt-4 sm:w-3/4 w-full rounded-full justify-center bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded">
                                TAKE ME THERE
                     </button>
                        </div>
                    </div>
                </div>


            </div>
            {/* Testimonial */}
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
                                className={`block sm:h-2 sm:w-2 h-2 w-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "sm:w-6 sm:h-2 h-2 w-2 bg-primary-100" : "w-4 border border-primary-100 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}

                transition={{ duration: 2 }} className="pb-1 rounded-xl">
                {/* Slider 1 */}
                <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-12 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto max-w-2xl lg:max-w-4xl  border border-gray-200 rounded-xl px-6 pb-6">
                        <figure className="mt-10">
                            <figcaption className="mt-10">
                                <Image
                                    className="mx-auto h-20 w-20 rounded-full"
                                    src={Lotfi}
                                    alt="Lotfi"
                                />
                                <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-Bebas text-gray-900 text-xl">Behrouz Lotfi</div>
                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                </div>
                                <div className="text-gray-400 flex items-center justify-center font-Monserat">United Kingdom, Manchester</div>
                                {/* Test */}
                                {/* <div className="-my-10">
                                    {reviews.map((review, reviewIdx) => (
                                        <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                                            <div className="flex-none py-10">
                                                <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                                            </div>
                                            <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                                                <h3 className="font-medium text-gray-900">{review.author}</h3>
                                                <p>
                                                    <time dateTime={review.datetime}>{review.date}</time>
                                                </p>

                                                <div className="mt-4 flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={classNames(
                                                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                'h-5 w-5 flex-shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="sr-only">{review.rating} out of 5 stars</p>

                                                <div
                                                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                                                    dangerouslySetInnerHTML={{ __html: review.content }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                                {/* Test */}
                            </figcaption>
                            <blockquote className="text-center text-xl font-Monserat leading-8 text-gray-900 sm:text-xl sm:leading-9">
                                <p>
                                    “you'll get the best of what you put in. the team is working at their best to provide us variety of paces and qualities. had a great experience working with them. thanks a lot.”
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </section>
                {/* Slider 2 */}
                <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-12 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <figure className="mt-10">
                            <figcaption className="mt-10">
                                <Image
                                    className="mx-auto h-20 w-20 rounded-full"
                                    src={Lotfi}
                                    alt="Lotfi"
                                />
                                <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-Bebas text-gray-900 text-xl">Behrouz Lotfi</div>
                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                </div>
                                <div className="text-gray-400 flex items-center justify-center font-Monserat">United Kingdom, Manchester</div>
                                {/* Test */}
                                {/* <div className="-my-10">
                                    {reviews.map((review, reviewIdx) => (
                                        <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                                            <div className="flex-none py-10">
                                                <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                                            </div>
                                            <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                                                <h3 className="font-medium text-gray-900">{review.author}</h3>
                                                <p>
                                                    <time dateTime={review.datetime}>{review.date}</time>
                                                </p>

                                                <div className="mt-4 flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={classNames(
                                                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                'h-5 w-5 flex-shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="sr-only">{review.rating} out of 5 stars</p>

                                                <div
                                                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                                                    dangerouslySetInnerHTML={{ __html: review.content }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                                {/* Test */}
                            </figcaption>
                            <blockquote className="text-center text-xl font-Monserat leading-8 text-gray-900 sm:text-xl sm:leading-9">
                                <p>
                                    “you'll get the best of what you put in. the team is working at their best to provide us variety of paces and qualities. had a great experience working with them. thanks a lot.”
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </section>
            </Carousel>
        </div>
    );
}

export default OurTech