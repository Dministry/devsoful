import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import BrandModal from '../../../components/modals/BrandModal'
import BrandPageHeader from '../../../components/headers/BrandingPageHeader'


const Branding = () => {
    return (
        <>
            <BrandPageHeader />
            <BrandModal />
            <footer className="">
                <Footer />
            </footer>
        </>
    )
}

export default Branding