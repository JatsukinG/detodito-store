import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { previewData } from 'next/headers'
import Footer from '@/app/components/footer'

const query = groq`
  *[_type == 'prodcut']
`

export default async function Home() {
  const data = await client.fetch(query)
  if (previewData()) {
    return <div>preview mode</div>
  }

  return (
      <div className="w-full h-full">
        <div>Not preview</div>
        <Footer />
      </div>
  )
}
