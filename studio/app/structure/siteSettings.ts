import S from "@sanity/desk-tool/structure-builder";
import { FiSettings, FiTag, FiTwitter, FiUsers } from "react-icons/fi";

export default S.listItem()
  .title("Innstillinger")
  .icon(FiSettings)
  .child(
    S.list()
      .title("Innstillinger")
      .items([
        S.listItem()
          .title("Sideinnstillinger")
          .icon(FiSettings)
          .child(
            S.document()
              .schemaType("siteSettings")
              .documentId("siteSettings")
              .title("Sideinnstillinger")
          ),
        S.listItem()
          .title("Forfattere")
          .icon(FiUsers)
          .child(S.documentTypeList("author").title("Forfattere")),
        S.listItem()
          .title("Kategorier")
          .icon(FiTag)
          .child(S.documentTypeList("category").title("category")),
        S.listItem()
          .title("Sosiale medier")
          .icon(FiTwitter)
          .child(S.documentTypeList("socialMedia").title("Sosiale medier")),
        S.listItem()
          .title("Footer")
          .child(
            S.document()
              .schemaType("footer")
              .documentId("footer")
              .title("Footer")
          ),
        S.listItem()
          .title("Nyhetsbrevbanner")
          .child(
            S.document()
              .schemaType("newsletterSignupForm")
              .documentId("newsletterSignupForm")
              .title("Nyhetsbrevbanner")
          ),
        S.listItem()
          .title("Slackbanner")
          .child(
            S.document()
              .schemaType("slackBanner")
              .documentId("slackBanner")
              .title("Slackbanner")
          ),
      ])
  );
