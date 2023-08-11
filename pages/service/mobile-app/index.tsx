import Image from 'next/image'
import Footer from '../../../components/Footer'
import MobileAppPageHeader from '../../../components/headers/MobileAppPageHeader'
import ProjectsCards20 from '../../../public/ProjectsCards20.png'
import ProjectsCards21 from '../../../public/ProjectsCards21.png'
import ProjectsCards22 from '../../../public/ProjectsCards22.png'
import ProjectsCards25 from '../../../public/ProjectsCards25.png'

const MobileApp = () => {
    return (
        <>
            <MobileAppPageHeader />
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mx-auto gap-3 max-w-5xl mx-10 my-14 flex inline-flex justify-center">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards20} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards21} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards22} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards25} alt="" />
                </div>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </>
    )
}

export default MobileApp