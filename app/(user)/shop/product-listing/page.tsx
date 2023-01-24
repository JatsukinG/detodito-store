import FilterOptions from '@/app/(user)/shop/components/filter/FilterOptions'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import ProductCard from '@/app/(user)/shop/components/ProductCard'

const query = groq`
  *[_type == 'prodcut']
`

interface Product {
  image: object
  name: string
  price: number
  slug: Slug
  details: string
}

interface Slug {
  type: string
  current: string
}

const ProductListing = async () => {
  const data = await client.fetch(query)
  console.log(data)

  return (
      <div className="flex flex-col">
        <div className="flex">
          <FilterOptions/>
          <div className="flex p-8 gap-8">
            {
              data.map((product: Product) => (
                  <ProductCard product={product}/>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default ProductListing