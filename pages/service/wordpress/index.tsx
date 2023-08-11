import Image from 'next/image'
import Footer from '../../../components/Footer'
import WordPressPageHeader from '../../../components/headers/WordPressPageHeader'
import ProjectsCards8 from '../../../public/ProjectsCards8.png'
import ProjectsCards4 from '../../../public/ProjectsCards4.png'
import ProjectsCards12 from '../../../public/ProjectsCards12.png'

const WordPress = () => {
    return (
        <>
            <WordPressPageHeader />
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:mx-auto gap-3 max-w-5xl mx-10 my-14 flex inline-flex justify-center">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards8} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards4} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards12} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards8} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards4} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={ProjectsCards12} alt="" />
                </div>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </>
    )
}

export default WordPress