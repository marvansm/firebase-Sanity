import client from "../lib/sanity";

export const SanityData=async (url) => {
   return await client.fetch(url)
}