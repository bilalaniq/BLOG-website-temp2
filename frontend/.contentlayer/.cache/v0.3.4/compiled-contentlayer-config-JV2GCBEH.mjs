// contentlayer.config.ts
import { makeSource, defineDocumentType } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    author: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`
    },
    formattedDate: {
      type: "string",
      resolve: (doc) => new Date(doc.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog],
  disableImportAliasWarning: true
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JV2GCBEH.mjs.map
