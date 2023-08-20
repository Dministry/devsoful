
import { useState } from "react";
import Head from 'next/head'
import PriceCard from '../../components/PriceCard'
import WebCard from '../../components/pricingcards/WebCard'
import MobileCard from '../../components/pricingcards/MobileCard'
import BrandingCard from '../../components/pricingcards/BrandingCard'
import EComCard from '../../components/pricingcards/EComCard'
import WordPressCard from '../../components/pricingcards/WordPressCard'
import PricingPageHeader from '../../components/PricingPageHeader'

const Pricing = () => {
	return (
		<>
			<Head>
                <title>Pricing - DEVSOFUL</title>
            </Head>
            <PricingPageHeader />
			<div className="w-[90%] mx-auto">
			<PriceCard />
			<WebCard />
			<MobileCard />
			<BrandingCard />
			<EComCard />
			<WordPressCard />
			</div>
			
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

