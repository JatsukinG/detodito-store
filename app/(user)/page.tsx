import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { previewData } from 'next/headers'
import FeaturedProduct from "@/app/components/featured-product";

const query = groq`
  *[_type == 'prodcut' && featured == true]
`

export default async function Home() {
  const data = await client.fetch(query)
  if (previewData()) {
    return <div>preview mode</div>
  }

  return (
      <div className="w-full h-full">
          <FeaturedProduct products={data}/>
      </div>
  )
}
