import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, PhoneCall, ThumbsUp } from "lucide-react";

import contactCall from "@/assets/contact-call.jpg";
import { CardGrid, CtaPair, SectionIntro } from "@/components/sections";
import { ComplianceNote } from "@/components/site-shell";
import {
  emailAddress,
  emailHref,
  legalBusinessName,
  phoneDisplay,
  phoneHref,
} from "@/lib/site-config";
import { usePageMeta } from "@/lib/use-page-meta";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const expect = [
  {
    icon: PhoneCall,
    title: "1. You call",
    text: "Tell us which internet or cable TV topic you have a question about.",
  },
  {
    icon: ClipboardList,
    title: "2. We listen",
    text: "An advisor learns what you are trying to understand.",
  },
  {
    icon: ThumbsUp,
    title: "3. General guidance",
    text: "You receive general informational support. Account actions stay with your provider.",
  },
];

function ContactPage() {
  usePageMeta("Contact", "Contact us for internet and cable TV guidance.");
  return (
    <main>
      <section className="contact-top">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h1>Contact us.</h1>
          <p>{legalBusinessName}</p>
          <a className="contact-number" href={phoneHref}>
            {phoneDisplay}
          </a>
          <p>
            <a href={emailHref}>{emailAddress}</a>
          </p>
          <CtaPair />
          <ComplianceNote full />
        </div>
        <img className="contact-image" src={contactCall} alt="Person on a phone call" />
      </section>

      <section className="section-block content-width" style={{ paddingTop: 96 }}>
        <SectionIntro eyebrow="What to expect" title="A simple, informational call." />
        <CardGrid items={expect} />
      </section>
    </main>
  );
}
