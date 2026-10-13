import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/refund-policy")({ component: RefundPolicyPage });

function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="Please read this page carefully."
      sections={[
        {
          heading: "Provider subscriptions",
          paragraphs: [
            "We do not sell internet or cable subscriptions. Refunds, credits, and cancellations for any provider service are governed by that provider's own terms and must be requested from the provider.",
          ],
        },
        {
          heading: "Our guidance",
          paragraphs: [
            "Calling us for general guidance does not create a subscription with us. If you have questions about this policy, contact us using the details below.",
          ],
        },
      ]}
    />
  );
}
