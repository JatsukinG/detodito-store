import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { previewData } from 'next/headers'
import Image from 'next/image'
import urlFor from '@/lib/urlFor'

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

export default async function Home() {
  const data = await client.fetch(query)
  if (previewData()) {
    return <div>preview mode</div>
  }
  return (
      <div className="bg">
        <h1>not preview</h1>
        {
          data.map((product: Product) => (
              <div className="relative w-full h-80">
                  <Image
                      className='object-cover object-left lg:object-center'
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      fill/>
              </div>
          ))
        }
      </div>
  )
}
