import { createFileRoute } from "@tanstack/react-router";
import { Gamepad2, Laptop, Tv } from "lucide-react";

import connectedHome from "@/assets/connected-home.jpg";
import fiber from "@/assets/fiber-connectivity.jpg";
import homeRouter from "@/assets/home-router.jpg";
import { CardGrid, CtaPair, Faq, PhotoStory, SectionIntro } from "@/components/sections";
import { CallButton } from "@/components/site-shell";
import { usePageMeta } from "@/lib/use-page-meta";

export const Route = createFileRoute("/internet-services")({ component: InternetPage });

const topics = [
  {
    title: "Connection types",
    text: "General information about fiber, cable, and wireless connections.",
    image: fiber,
    imageAlt: "Fiber optic cables",
  },
  {
    title: "Wi-Fi and routers",
    text: "Common guidance on placement, coverage, and household devices.",
    image: homeRouter,
    imageAlt: "Home Wi-Fi router",
  },
  {
    title: "Connected homes",
    text: "How many devices share a connection and why it can matter.",
    image: connectedHome,
    imageAlt: "Connected home",
  },
];

const uses = [
  {
    icon: Tv,
    title: "Streaming",
    text: "Video streaming generally benefits from a steady connection on each screen.",
  },
  {
    icon: Laptop,
    title: "Working from home",
    text: "Video calls and file sharing rely on a stable connection.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    text: "Wired connections are commonly suggested for lower delay.",
  },
];

const faqs = [
  {
    q: "Do you provide internet service?",
    a: "No. We are not an Internet Service Provider and do not sell internet subscriptions.",
  },
  {
    q: "Can you fix my connection?",
    a: "We offer general guidance on common connectivity issues. We do not provide guaranteed technical fixes.",
  },
  {
    q: "Can you help me navigate my provider's process?",
    a: "We can share general information about how service provider processes typically work. Account actions are handled by your provider.",
  },
];

function InternetPage() {
  usePageMeta(
    "Internet & Broadband Guidance",
    "General informational guidance on internet, broadband, and Wi-Fi for your household.",
  );
  return (
    <main>
      <section className="service-hero">
        <div className="service-hero-copy">
          <p className="eyebrow">Internet &amp; broadband</p>
          <h1>Internet guidance that makes sense.</h1>
          <p className="hero-description">
            General guidance and informational support related to internet, broadband, and Wi-Fi for
            your household.
          </p>
          <CtaPair />
        </div>
        <div className="service-hero-image-wrap">
          <img className="service-hero-image" src={homeRouter} alt="Home Wi-Fi router" />
        </div>
      </section>

      <section className="section-block content-width" style={{ paddingTop: 72 }}>
        <SectionIntro eyebrow="Topics" title="General information, not provider support." />
        <CardGrid items={topics} />
      </section>

      <section className="section-block content-width">
        <SectionIntro eyebrow="By use" title="Everyday connectivity topics." />
        <CardGrid items={uses} />
      </section>

      <PhotoStory
        reverse
        image={connectedHome}
        alt="A home with many connected devices"
        title="Questions you may want to ask your provider."
        text="We can help you think through general questions. Answers come from your provider."
        items={[
          "What equipment is included with my service?",
          "How do I report a connection issue?",
          "What are the terms of my agreement?",
        ]}
      />

      <Faq items={faqs} />

      <section className="callout-band">
        <h2>Questions about internet topics?</h2>
        <CallButton />
      </section>
    </main>
  );
}
