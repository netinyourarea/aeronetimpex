import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms-and-conditions")({ component: TermsPage });

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Please read this page carefully."
      sections={[
        {
          heading: "Use of this website",
          paragraphs: [
            "By using this website you agree to these terms. The site provides general informational content about internet, broadband, Wi-Fi, and cable TV topics.",
          ],
        },
        {
          heading: "Nature of our service",
          bullets: [
            "We are not an Internet Service Provider (ISP)",
            "We do not provide official customer support for any brand",
            "We do not sell internet or cable subscriptions",
            "We do not provide guaranteed technical fixes",
          ],
        },
        {
          heading: "Information only",
          paragraphs: [
            "Content is general and informational. Any decisions about service are yours, and account matters are handled by your provider.",
          ],
        },
        {
          heading: "Brand names",
          paragraphs: [
            "Brand names, if mentioned, are used strictly for informational purposes only and do not imply affiliation, authorization, or endorsement.",
          ],
        },
      ]}
    />
  );
}
