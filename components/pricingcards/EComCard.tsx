
import { useState } from "react";

const Option = () => {
    const [expanded, setExpanded] = useState(false);

    if (expanded) {
        return (
            <>
                <div className="rounded-lg py-4 flex flex-col justify-between transition-all duration-500 cursor-pointer">
                    <div className="container my-2 mx-auto md:px-6">
                        <section className="mb-3">
                            <div
                                className="block rounded-lg border border-primary-100 py-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-full">
                                        <div className="px-6 py-2 md:px-12 divide divide-y">
                                            <div className="grid grid-flow-col auto-cols-max gap-4">
                                                <span><svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" version="1.1"><path d="M 4.175 1.892 L 2.969 2.637 3.234 31.569 L 3.500 60.500 32.776 60.765 L 62.051 61.030 62.667 59.426 L 63.283 57.821 60.116 54.661 L 56.950 51.500 56.358 53.750 L 55.767 56 31.883 56 L 8 56 8 53 L 8 50 9.500 50 L 11 50 11 48 L 11 46 9.500 46 L 8 46 8 40.500 L 8 35 9.500 35 L 11 35 11 33.500 L 11 32 9.500 32 L 8 32 8 26.500 L 8 21 9.500 21 L 11 21 11 19 L 11 17 9.500 17 L 8 17 8 13.264 L 8 9.528 21.263 22.764 L 34.527 36 35.263 36 L 36 36 36 33.124 L 36 30.248 20.691 15.697 L 5.381 1.146 4.175 1.892 M 16 39.345 L 16 48 24.655 48 L 33.310 48 31.500 46 L 29.690 44 24.845 44 L 20 44 20 39.155 L 20 34.310 18 32.500 L 16 30.690 16 39.345" stroke="none" fill="#242424" fill-rule="evenodd" /><path d="M 43.247 7.250 L 42.250 8.500 40.625 11.700 L 39 14.901 39 33.250 L 39 51.600 40.200 52.800 L 41.400 54 46.129 54 L 50.857 54 52.429 52.429 L 54 50.857 54 33.314 L 54 15.771 51.341 10.885 L 48.682 6 46.464 6 L 44.245 6 43.247 7.250 M 44.619 13.771 L 43 16.901 43 29.450 L 43 42 46 42 L 49 42 48.965 28.750 L 48.929 15.500 47.583 13.070 L 46.237 10.641 44.619 13.771 M 43 47.500 L 43 49 46 49 L 49 49 49 47.500 L 49 46 46 46 L 43 46 43 47.500" stroke="none" fill="#04a4e4" fill-rule="evenodd" /></svg></span>
                                                <h2 className="mb-2 text-4xl font-Bebas">
                                                    E-COMMERCE
                                            </h2>
                                            </div>

                                            <div className="grid gap-x-6 py-6 md:grid-cols-2 mt-2 lg:grid-cols-2 xl:grid-cols-2">
                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-2 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Freight order placement (via self-service)
                                                </p>
                                                </div>
                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>

                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-green-500 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>
                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>

                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>

                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>
                                                <div className="mb-6">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>

                                                <div className="mb-2">
                                                    <p className="flex items-center font-Monserat text-xs">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                                    </p>
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-col-2 px-6 flex sm:justify-end mx-auto">
                                    {/* <button className="rounded-full bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-2 px-4 border border-primary-100 hover:border-transparent rounded mb-2">
                                        GET TO KNOW OUR WORK
                                </button> */}
                                    <button className="rounded-full bg-transparent hover:bg-primary-100 text-primary-100 font-Bebas hover:text-white py-1 px-8 border border-primary-100 hover:border-transparent rounded mb-4">
                                        ORDER NOW
                                </button>
                                </div>
                            </div>
                        </section>

                    </div>

                    <button
                        className="text-primary-100 focus:outline-none border border-primary-100 mx-auto px-8 py-1 text-sm font-Bebas rounded-full"
                        onClick={() => setExpanded(false)}
                    >
                        collapse
        			</button>
                </div>

            </>
        );
    } else {
        return (
            <div className="h-62 border border-gray-300 rounded-lg px-8 py-8 flex flex-col justify-between transition-all duration-500 cursor-pointer">
                 <div className="grid grid-flow-col auto-cols-max gap-4">
                <span><svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" version="1.1"><path d="M 4.175 1.892 L 2.969 2.637 3.234 31.569 L 3.500 60.500 32.776 60.765 L 62.051 61.030 62.667 59.426 L 63.283 57.821 60.116 54.661 L 56.950 51.500 56.358 53.750 L 55.767 56 31.883 56 L 8 56 8 53 L 8 50 9.500 50 L 11 50 11 48 L 11 46 9.500 46 L 8 46 8 40.500 L 8 35 9.500 35 L 11 35 11 33.500 L 11 32 9.500 32 L 8 32 8 26.500 L 8 21 9.500 21 L 11 21 11 19 L 11 17 9.500 17 L 8 17 8 13.264 L 8 9.528 21.263 22.764 L 34.527 36 35.263 36 L 36 36 36 33.124 L 36 30.248 20.691 15.697 L 5.381 1.146 4.175 1.892 M 16 39.345 L 16 48 24.655 48 L 33.310 48 31.500 46 L 29.690 44 24.845 44 L 20 44 20 39.155 L 20 34.310 18 32.500 L 16 30.690 16 39.345" stroke="none" fill="#242424" fill-rule="evenodd" /><path d="M 43.247 7.250 L 42.250 8.500 40.625 11.700 L 39 14.901 39 33.250 L 39 51.600 40.200 52.800 L 41.400 54 46.129 54 L 50.857 54 52.429 52.429 L 54 50.857 54 33.314 L 54 15.771 51.341 10.885 L 48.682 6 46.464 6 L 44.245 6 43.247 7.250 M 44.619 13.771 L 43 16.901 43 29.450 L 43 42 46 42 L 49 42 48.965 28.750 L 48.929 15.500 47.583 13.070 L 46.237 10.641 44.619 13.771 M 43 47.500 L 43 49 46 49 L 49 49 49 47.500 L 49 46 46 46 L 43 46 43 47.500" stroke="none" fill="#04a4e4" fill-rule="evenodd" /></svg></span>
                <h2 className="mb-2 text-4xl font-Bebas">
                E-COMMERCE
                </h2>
                </div>
                <div className="mb-2">
                <p className="flex items-center font-Monserat text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                </p> </div>
                <div className="mb-2">
                <p className="flex items-center font-Monserat text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-3 h-4 w-4 text-neutral-900 dark:text-neutral-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Market data-based freight rate estimates
                </p>
                </div>
                <button
                    className="text-primary-100 focus:outline-none border border-primary-100 mx-auto px-8 py-1 text-sm font-Bebas rounded-full"
                    onClick={() => setExpanded(true)}
                >
                    EXPAND
        </button>
            </div>
        );
    }
};

export default function EComCard() {
    return (
        <div className="App p-4">
            <Option />
        </div>
    );
}
