
import { useState } from "react";
import Head from 'next/head'
import PriceCard from '../../components/PriceCard'
import PricingPageHeader from '../../components/PricingPageHeader'

const Pricing = () => {
	return (
		<>
			<Head>
                <title>Pricing - DEVSOFUL</title>
            </Head>
            <PricingPageHeader />
			<PriceCard />
			
		</>
	)
}

export default Pricing


// import HomeLayout from "../../layouts/MainLayout";





// const Pricing = () => {
// 	
// 	return (
// 		<>
// 			<Head>
// 				<title>Pricing DEVSOFUL</title>
// 			</Head>
// 			<PricingPageHeader />

// 			<footer className="">
// 				<Footer />
// 			</footer>
// 		</>
// 	)
// }

