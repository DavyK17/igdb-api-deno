import "https://deno.land/std@0.224.0/dotenv/load.ts";
import { IgdbClient } from "./mod.ts";

const client = new IgdbClient(Deno.env.get("IGDB_CLIENT_ID")!, Deno.env.get("IGDB_CLIENT_SECRET")!);

await client.getAccessToken();

Deno.bench(async function ageRatings() {
  await client.ageRatings({
    fields: "category,checksum,content_descriptions,rating,rating_cover_url,synopsis",
  });
});

