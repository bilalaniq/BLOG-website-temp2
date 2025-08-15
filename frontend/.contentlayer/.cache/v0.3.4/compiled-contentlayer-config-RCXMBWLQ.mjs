// contentlayer.config.ts
import { makeSource, defineDocumentType } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.md",
  // or '**/*.mdx' if you want MDX
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    author: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      default: []
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
//# sourceMappingURL=compiled-contentlayer-config-RCXMBWLQ.mjs.map
