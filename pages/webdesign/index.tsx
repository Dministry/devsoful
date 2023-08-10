import Image from 'next/image'
import ProjectsCards8 from '../../public/ProjectsCards8.png'
import ProjectsCards9 from '../../public/ProjectsCards9.png'
import ProjectsCards10 from '../../public/ProjectsCards10.png'
import ProjectsCards11 from '../../public/ProjectsCards11.png'
import ProjectsCards12 from '../../public/ProjectsCards12.png'
import ProjectsCards13 from '../../public/ProjectsCards13.png'
import ProjectsCards14 from '../../public/ProjectsCards14.png'
import ProjectsCards15 from '../../public/ProjectsCards15.png'
import ProjectsCards16 from '../../public/ProjectsCards16.png'
import ProjectsCards17 from '../../public/ProjectsCards17.png'
import ProjectsCards18 from '../../public/ProjectsCards18.png'
import ProjectsCards19 from '../../public/ProjectsCards19.png'
const WebDesign = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mx-auto gap-3 max-w-5xl mx-10 flex inline-flex justify-center">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards8} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards9} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards10} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards11} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards12} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards13} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards14} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards15} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards16} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards12} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards19} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards14} alt="" />
                </div>
            </div>
        </>
    )
}

export default WebDesign