import Image from 'next/image'
import ProdShape from '../public/Product_Shapes.png'
const ProductLife = () => {
    return (
        <div className="w-3/4 my-20 mx-auto md:px-6">
            <h2 className="mt-16 mb-2 text-center text-3xl font-bold">
                FULL PRODUCT <span className="text-primary-100">LIFE CYCLE </span>
            </h2>
            <p className="text-neutral-500 mb-8 dark:text-neutral-300 flex items-center justify-center text-center">
                Your products create interest and drive sales. They're what keeps customers coming back. But taking an idea from inception to launch is a massive task that needs to be approached seriously.
                </p>
            <div className="flex items-center justify-center">
                <Image
                    src={ProdShape}
                    alt="Product Shape"
                />
            </div>
        </div>
    )
}

export default ProductLife