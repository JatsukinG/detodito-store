import Header from '@/app/components/header'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

const query = groq`
  *[_type == 'prodcut']
`

export default async function Home() {
  const data = await client.fetch(query)
  return (
      <div className="bg">
        <Header/>
      </div>
  )
}
