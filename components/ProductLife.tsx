import Image from 'next/image'
import ProdShape from '../public/Product_Shapes.png'
const ProductLife = () => {
    return (
        <div>
            <h2 className="mt-16 mb-8 text-center text-3xl font-bold">
                FULL PRODUCT <span className="text-primary-100">LIFE CYCLE </span>
            </h2>
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