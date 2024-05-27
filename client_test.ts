import "https://deno.land/std@0.224.0/dotenv/load.ts";
import { IgdbClient } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";

const client = new IgdbClient(Deno.env.get("IGDB_CLIENT_ID")!, Deno.env.get("IGDB_CLIENT_SECRET")!);

await client.getAccessToken();

Deno.test("Age Ratings to have 10 elements by default", async () => {
  const ratings = await client.ageRatings({
    fields: "category,checksum,content_descriptions,rating,rating_cover_url,synopsis",
  });
  assertEquals(ratings.length, 10);
});

Deno.test("Age Ratings to have 20 elements with limit", async () => {
  const ratings = await client.ageRatings({
    fields: "category,checksum,content_descriptions,rating,rating_cover_url,synopsis",
    limit: 20,
  });
  assertEquals(ratings.length, 20);
});

Deno.test("Age Ratings to have 10 elements with where", async () => {
  const ratings = await client.ageRatings({
    fields: "category,checksum,content_descriptions,rating,rating_cover_url,synopsis",
    where: "category = 1",
    limit: 10,
  });
  assertEquals(ratings.length, 10);
  assertEquals(
    ratings.every((r) => r.category === 1),
    true
  );
});

Deno.test("Age Ratings to have 10 elements with sort", async () => {
  const ratings = await client.ageRatings({
    fields: "category,checksum,content_descriptions,rating,rating_cover_url,synopsis",
    sort: "rating desc",
    limit: 10,
  });
  assertEquals(ratings.length, 10);
  assertEquals(
    ratings.every((r, i, arr) => i === 0 || r.rating <= arr[i - 1].rating),
    true
  );
});

Deno.test("Alternative Names to have 10 elements by default", async () => {
  const altNames = await client.alternativeNames({
    fields: "checksum,comment,game,name",
  });
  assertEquals(altNames.length, 10);
});

Deno.test("Alternative Names to have 1 element with where", async () => {
  const altNames = await client.alternativeNames({
    fields: "checksum,comment,game,name",
    where: "game = 37616",
  });
  assertEquals(altNames.length, 1);
});

