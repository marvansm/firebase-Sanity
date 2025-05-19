import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "el6efs3e",
  dataset: "production",
  apiVersion: "2021-03-25",
  // token: "sanity-auth-token",
  useCdn: true,
});

export default client;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}
