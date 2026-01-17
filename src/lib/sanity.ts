import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Define the image source type locally to avoid import issues
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Product queries
export async function getProducts() {
  return sanityClient.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      originalPrice,
      description,
      longDescription,
      category,
      "image": image.asset->url,
      "images": images[].asset->url,
      inStock,
      featured,
      rating,
      reviews,
      materials
    }
  `);
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      price,
      originalPrice,
      description,
      longDescription,
      category,
      "image": image.asset->url,
      "images": images[].asset->url,
      inStock,
      featured,
      rating,
      reviews,
      materials
    }
  `,
    { slug }
  );
}

export async function getFeaturedProducts() {
  return sanityClient.fetch(`
    *[_type == "product" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      originalPrice,
      description,
      longDescription,
      category,
      "image": image.asset->url,
      "images": images[].asset->url,
      inStock,
      featured,
      rating,
      reviews,
      materials
    }
  `);
}

export async function getProductsByCategory(category: string) {
  if (category === "All") {
    return getProducts();
  }
  return sanityClient.fetch(
    `
    *[_type == "product" && category == $category] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      originalPrice,
      description,
      longDescription,
      category,
      "image": image.asset->url,
      "images": images[].asset->url,
      inStock,
      featured,
      rating,
      reviews,
      materials
    }
  `,
    { category }
  );
}

export async function getCategories() {
  return sanityClient.fetch(`
    *[_type == "category"] | order(order asc) {
      _id,
      name,
      slug
    }
  `);
}
