import 'https://deno.land/std/dotenv/load.ts'
import { IgdbClient } from './mod.ts'
import { assertEquals } from 'https://deno.land/std@0.188.0/testing/asserts.ts'

const client = new IgdbClient(
  Deno.env.get('IGDB_CLIENT_ID')!,
  Deno.env.get('IGDB_CLIENT_SECRET')!
)

await client.getAccessToken()

Deno.bench(async function ageRatings() {
  await client.ageRatings({
    fields: 'category,checksum,content_descriptions,rating,rating_cover_url,synopsis'
  })
})
