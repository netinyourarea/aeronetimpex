import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({ component: PrivacyPolicyPage });

function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Please read this page carefully."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect only the information you choose to share with us, such as details you provide when you call or email, so we can respond to your questions.",
          ],
        },
        {
          heading: "How we use information",
          bullets: [
            "To respond to your questions and provide general informational support",
            "To maintain and improve this website",
            "We do not sell your personal information",
          ],
        },
        {
          heading: "Third parties",
          paragraphs: [
            "We are not affiliated with any internet, cable, or telecom provider. We do not share your information with providers on your behalf.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may contact us at any time to ask about, correct, or request deletion of information you have shared with us.",
          ],
        },
      ]}
    />
  );
}
