import Image from 'next/image'
import ProjectsCards20 from '../../public/ProjectsCards20.png'
import ProjectsCards21 from '../../public/ProjectsCards21.png'
import ProjectsCards22 from '../../public/ProjectsCards22.png'
import ProjectsCards23 from '../../public/ProjectsCards23.png'
import ProjectsCards24 from '../../public/ProjectsCards24.png'
import ProjectsCards25 from '../../public/ProjectsCards25.png'

const Branding = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mx-auto gap-3 max-w-5xl mx-10 flex inline-flex justify-center">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards23} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards24} alt="" />
                </div>
            </div>
        </>
    )
}

export default Branding