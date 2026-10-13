import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { disclaimerText } from "@/lib/site-config";

export const Route = createFileRoute("/disclaimer")({ component: DisclaimerPage });

function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro={disclaimerText}
      sections={[
        {
          heading: "Who we are not",
          bullets: [
            "We are not an Internet Service Provider (ISP)",
            "We do not provide official customer support for any brand",
            "We are not affiliated, authorized, or endorsed by any telecom or cable company",
          ],
        },
        {
          heading: "No guarantees",
          paragraphs: [
            "We provide general guidance and informational support only. We do not provide guaranteed technical fixes.",
          ],
        },
      ]}
    />
  );
}
