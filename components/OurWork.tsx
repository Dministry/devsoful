import Image from 'next/image'
import CtaButton from './CtaButton';

const OurWork = () => {
    return (
        <>
            <div className="w-3/4 my-20 mx-auto md:px-6">
                <section className="lg:mb-8 mb-2 text-center lg:text-left">
                    <h2 className="mb-2 text-center text-3xl font-bold">
                        FULL <span className="text-primary-100">CYCLE </span>BRAND AND PRODUCT DEVELOPMENT
                </h2>
                    <p className="text-gray-500 mb-8 dark:text-neutral-300 flex items-center justify-center">
                        We are focused on Branding, Design and Development and can do amazing things for you and your company.
                </p>
                    <div className="grid gap-x-6 lg:grid-cols-3 items-center justify-center">
                        <div className="mb-12 lg:mb-0  border border-gray-300 rounded-lg p-8">
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" version="1.1"><path d="M 23.830 8.027 L 20.161 9.965 18.184 12.742 L 16.207 15.518 15.022 19.918 L 13.837 24.318 14.504 27.875 L 15.171 31.431 16.574 33.965 L 17.976 36.500 21.449 40.372 L 24.923 44.244 26.384 43.683 L 27.845 43.122 27.303 41.051 L 26.762 38.981 24.337 36.740 L 21.912 34.500 20.456 31.800 L 19 29.099 19.004 24.800 L 19.007 20.500 20.995 17.241 L 22.982 13.982 26.241 11.995 L 29.500 10.007 32.290 10.004 L 35.080 10 39.019 12.010 L 42.959 14.020 44.359 16.760 L 45.759 19.500 46.458 22.747 L 47.157 25.993 46.060 29.319 L 44.962 32.644 41.481 36.018 L 38 39.392 38 41.696 L 38 44 39.250 44 L 40.500 43.999 44.750 39.063 L 49.001 34.128 50 31.499 L 51 28.870 50.978 24.685 L 50.956 20.500 49.110 16.500 L 47.264 12.500 44.882 10.317 L 42.500 8.133 39.685 7.067 L 36.870 6 32.185 6.044 L 27.500 6.088 23.830 8.027 M 27 56 L 27 58 32.500 58 L 38 58 38 56 L 38 54 32.500 54 L 27 54 27 56" stroke="none" fill="#242424" fill-rule="evenodd" /><path d="M 12.135 5.337 L 11.025 6.675 13.483 8.984 L 15.941 11.294 17.504 9.997 L 19.067 8.700 16.859 6.350 L 14.651 4 13.948 4 L 13.245 4 12.135 5.337 M 48.472 6.031 L 46.634 8.062 48.321 9.749 L 50.008 11.437 52.172 9.273 L 54.335 7.109 53.045 5.555 L 51.755 4 51.033 4 L 50.310 4 48.472 6.031 M 4.180 25.250 L 4.500 27.500 7.500 27.500 L 10.500 27.500 10.820 25.250 L 11.139 23 7.500 23 L 3.861 23 4.180 25.250 M 54.180 25.250 L 54.500 27.500 57.500 27.500 L 60.500 27.500 60.820 25.250 L 61.139 23 57.500 23 L 53.861 23 54.180 25.250 M 13.157 41.332 L 10.969 43.662 12.812 45.329 L 14.654 46.997 16.843 44.668 L 19.031 42.338 17.188 40.671 L 15.346 39.003 13.157 41.332 M 48.023 40.472 L 46.706 42.059 49.047 44.550 L 51.387 47.041 52.914 45.514 L 54.442 43.987 51.891 41.436 L 49.340 38.885 48.023 40.472 M 23.703 46.631 L 23 47.333 23 49.167 L 23 51 32.570 51 L 42.139 51 41.820 48.750 L 41.500 46.500 32.953 46.214 L 24.405 45.928 23.703 46.631" stroke="none" fill="#04a4e4" fill-rule="evenodd" /></svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold flex items-center justify-center text-align-center">BRANDING DESIGN</h5>
                            <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                We make the essence of your brand visible to the world
                                </p>
                        </div>
                        {/* Card 2 */}
                        <div className="mb-12 lg:mb-0  border border-gray-300 rounded-lg p-8">
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" version="1.1"><path d="M 4.175 1.892 L 2.969 2.637 3.234 31.569 L 3.500 60.500 32.776 60.765 L 62.051 61.030 62.667 59.426 L 63.283 57.821 60.116 54.661 L 56.950 51.500 56.358 53.750 L 55.767 56 31.883 56 L 8 56 8 53 L 8 50 9.500 50 L 11 50 11 48 L 11 46 9.500 46 L 8 46 8 40.500 L 8 35 9.500 35 L 11 35 11 33.500 L 11 32 9.500 32 L 8 32 8 26.500 L 8 21 9.500 21 L 11 21 11 19 L 11 17 9.500 17 L 8 17 8 13.264 L 8 9.528 21.263 22.764 L 34.527 36 35.263 36 L 36 36 36 33.124 L 36 30.248 20.691 15.697 L 5.381 1.146 4.175 1.892 M 16 39.345 L 16 48 24.655 48 L 33.310 48 31.500 46 L 29.690 44 24.845 44 L 20 44 20 39.155 L 20 34.310 18 32.500 L 16 30.690 16 39.345" stroke="none" fill="#242424" fill-rule="evenodd" /><path d="M 43.247 7.250 L 42.250 8.500 40.625 11.700 L 39 14.901 39 33.250 L 39 51.600 40.200 52.800 L 41.400 54 46.129 54 L 50.857 54 52.429 52.429 L 54 50.857 54 33.314 L 54 15.771 51.341 10.885 L 48.682 6 46.464 6 L 44.245 6 43.247 7.250 M 44.619 13.771 L 43 16.901 43 29.450 L 43 42 46 42 L 49 42 48.965 28.750 L 48.929 15.500 47.583 13.070 L 46.237 10.641 44.619 13.771 M 43 47.500 L 43 49 46 49 L 49 49 49 47.500 L 49 46 46 46 L 43 46 43 47.500" stroke="none" fill="#04a4e4" fill-rule="evenodd" /></svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold flex items-center justify-center">DEVELOPMENT</h5>
                            <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                We make the essence of your brand visible to the world
                            </p>
                        </div>
                        <div className="mb-12 lg:mb-0 border border-gray-300 rounded-lg p-8">
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" version="1.1"><path d="M 44 26 L 44 32 38 32 L 32 32 32 38 L 32 44 26 44 L 20 44 20 52 L 20 60 40.500 60 L 61 60 61 40 L 61 20 52.500 20 L 44 20 44 26 M 49 28 L 49 32 52.500 32 L 56 32 56 28 L 56 24 52.500 24 L 49 24 49 28 M 37 40 L 37 44 40.500 44 L 44 44 44 40 L 44 36 40.500 36 L 37 36 37 40 M 49 40 L 49 44 52.500 44 L 56 44 56 40 L 56 36 52.500 36 L 49 36 49 40 M 25 52 L 25 56 28.500 56 L 32 56 32 52 L 32 48 28.500 48 L 25 48 25 52 M 37 52 L 37 56 40.500 56 L 44 56 44 52 L 44 48 40.500 48 L 37 48 37 52 M 49 52 L 49 56 52.500 56 L 56 56 56 52 L 56 48 52.500 48 L 49 48 49 52" stroke="none" fill="#242424" fill-rule="evenodd" /><path d="M 4 12 L 4 20 12.500 20 L 21 20 21 12 L 21 4 12.500 4 L 4 4 4 12 M 9 12 L 9 16 12.500 16 L 16 16 16 12 L 16 8 12.500 8 L 9 8 9 12 M 24 18 L 24 26 32.500 26 L 41 26 41 18 L 41 10 32.500 10 L 24 10 24 18 M 29 18 L 29 22 32.500 22 L 36 22 36 18 L 36 14 32.500 14 L 29 14 29 18 M 4 36 L 4 44 12.500 44 L 21 44 21 36 L 21 28 12.500 28 L 4 28 4 36 M 9 36 L 9 40 12.500 40 L 16 40 16 36 L 16 32 12.500 32 L 9 32 9 36" stroke="none" fill="#04a4e4" fill-rule="evenodd" /></svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold flex items-center justify-center">MARKETING</h5>
                            <p className="text-gray-500 dark:text-neutral-300 flex items-center justify-center text-center">
                                We make the essence of your brand visible to the world
                        </p>
                        </div>

                    </div>
                </section>
                {/* <CtaButton /> */}
            </div>
        </>

    )
}

export default OurWork 