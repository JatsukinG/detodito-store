import FilterOptions from '@/app/shop/components/filter/FilterOptions'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import Footer from '@/app/components/footer'

const query = groq`
  *[_type == 'prodcut']
`

const ProductListing = async () => {
  const data = await client.fetch(query)
  console.log(data)

  return (
      <div className="flex flex-col">
        <div className="flex">
          <FilterOptions/>
          <div className="flex p-8 gap-8">
            {/*products*/}
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default ProductListing