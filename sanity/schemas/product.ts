export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "originalPrice",
      title: "Original Price (for sale items)",
      type: "number",
    },
    {
      name: "description",
      title: "Short Description",
      type: "string",
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "text",
      rows: 4,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Rings", value: "Rings" },
          { title: "Necklaces", value: "Necklaces" },
          { title: "Earrings", value: "Earrings" },
          { title: "Bracelets", value: "Bracelets" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "materials",
      title: "Materials",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: "reviews",
      title: "Number of Reviews",
      type: "number",
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
};
