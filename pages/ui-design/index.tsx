import Image from 'next/image'
import ProjectsCards1 from '../../public/ProjectsCards1.png'
import ProjectsCards2 from '../../public/ProjectsCards2.png'
import ProjectsCards3 from '../../public/ProjectsCards3.png'
import ProjectsCards4 from '../../public/ProjectsCards4.png'
import ProjectsCards5 from '../../public/ProjectsCards5.png'
import ProjectsCards6 from '../../public/ProjectsCards6.png'
import ProjectsCards7 from '../../public/ProjectsCards7.png'
const UiDesign = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mx-auto gap-3 max-w-5xl mx-10 flex inline-flex justify-center">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards1} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards2} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards3} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards4} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards5} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards6} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards7} alt="" />
                </div>
            </div>
        </>
    )
}

export default UiDesign