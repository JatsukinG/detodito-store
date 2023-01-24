'use client'
import Image from 'next/image'
import urlFor from '@/lib/urlFor'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

const ProductCard = ({product}: any) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

  const mouseOver = () => setIsMouseOver(true)
  const mouseOut = () => setIsMouseOver(false)

  return (
      <Link href="/">
        <div
            className="relative w-48 h-64 flex flex-col justify-between"
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
        >
          <div className="relative w-48 h-48 overflow-hidden">
            <Image
                className='object-cover object-left lg:object-center'
                src={urlFor(product.image).url()}
                alt={product.name}
                fill/>
          </div>
          <p className="text-center">{product.name.substring(0,15)}</p>
          <p className={`text-center ${isMouseOver ? 'text-fuchsia-500' : 'text-gray-800'}`}>{product.price}</p>
          {
            isMouseOver && (
                <div className="absolute top-0 left-0 w-48 h-48 bg-black/30 flex justify-center items-center">
                  <span><FaShoppingCart color="white"/></span>
                </div>
              )
          }
        </div>
      </Link>

  )
}

export default ProductCard