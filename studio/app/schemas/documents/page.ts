import { PortableText } from "@Types";

export type PageType = {
  title: string;
  text: string;
  emptyState: PortableText;
};
export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "text",
      title: "Introduksjon",
      type: "text",
    },
    {
      name: "emptyState",
      title: "Empty State",
      type: "simpleBlockContent",
    },
  ],
};
