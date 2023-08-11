import Image from 'next/image'
import EcomPageHeader from '../../../components/headers/EcomPageHeader'
import ProjectsCards1 from '../../../public/ProjectsCards1.png'
import ProjectsCards26 from '../../../public/ProjectsCards26.png'
import ProjectsCards25 from '../../../public/ProjectsCards25.png'

const ECommerce = () => {
    return (
        <>
            <EcomPageHeader />
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mx-auto gap-3 max-w-5xl mx-10 my-14 flex inline-flex justify-center">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards25} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards26} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards1} alt="" />
                </div>
            </div>
        </>
    )
}

export default ECommerce