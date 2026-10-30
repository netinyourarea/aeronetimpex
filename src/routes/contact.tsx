import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, PhoneCall, ThumbsUp } from "lucide-react";

import contactCall from "@/assets/contact-call.jpg";
import { CallForm } from "@/components/call-form";
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
    text: "Tell us if your internet is down, slow, or your Wi-Fi is acting up.",
  },
  {
    icon: ClipboardList,
    title: "2. We listen",
    text: "An advisor asks about your modem lights, devices, and when the problem started.",
  },
  {
    icon: ThumbsUp,
    title: "3. Guided steps",
    text: "You work through troubleshooting and outage checks. Account actions stay with your provider.",
  },
];

function ContactPage() {
  usePageMeta(
    "Contact",
    "Call us for help with internet outages, slow speeds, and Wi-Fi problems.",
  );
  return (
    <main>
      <section className="contact-top">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h1>Call us. We pick up.</h1>
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

      <section className="section-block content-width" style={{ paddingTop: 72 }}>
        <CallForm />
      </section>

      <section className="section-block content-width" style={{ paddingTop: 72 }}>
        <SectionIntro eyebrow="What to expect" title="A simple phone call." />
        <CardGrid items={expect} />
      </section>
    </main>
  );
}
