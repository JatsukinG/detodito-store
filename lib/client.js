import {createClient} from "next-sanity"

export const client = createClient({
  projectId: 'oi7aq76f',
  dataset: 'production',
  apiVersion: '2023-01-18',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})