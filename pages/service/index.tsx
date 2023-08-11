import Head from 'next/head'
import Footer from '../../components/Footer'
import ServicePageHeader from '../../components/ServicePageHeader'
import OurTech from '../../components/OurTech';
const Service = () => {
    return (
        <>
            <Head>
                <title>Contact DEVSOFUL</title>
            </Head>
            <ServicePageHeader />
            <OurTech />
            <footer className="">
                <Footer />
            </footer>
        </>
    )
}

export default Service