import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Newspaper, Trophy } from "lucide-react";

import connectedHome from "@/assets/connected-home.jpg";
import contactCall from "@/assets/contact-call.jpg";
import television from "@/assets/television-living-room.jpg";
import { CardGrid, CtaPair, Faq, PhotoStory, SectionIntro } from "@/components/sections";
import { CallButton } from "@/components/site-shell";
import { usePageMeta } from "@/lib/use-page-meta";

export const Route = createFileRoute("/cable-tv-services")({ component: CableTvPage });

const genres = [
  {
    icon: Trophy,
    title: "Sports",
    text: "General information on how sports programming is commonly organized.",
  },
  {
    icon: Newspaper,
    title: "News",
    text: "Common terms used for local and national news channels.",
  },
  {
    icon: Clapperboard,
    title: "Movies & series",
    text: "An overview of on-demand and premium channel terminology.",
  },
];

const faqs = [
  {
    q: "Do you provide cable TV service?",
    a: "No. We do not provide cable services and do not sell subscriptions.",
  },
  {
    q: "Are you affiliated with a cable company?",
    a: "No. We are not affiliated with, authorized by, or endorsed by any cable TV provider.",
  },
  {
    q: "What kind of help do you offer?",
    a: "General informational support related to cable TV services, such as common terms and equipment topics.",
  },
];

function CableTvPage() {
  usePageMeta(
    "Cable TV Information",
    "General informational support related to cable TV for your household.",
  );
  return (
    <main>
      <section className="service-hero service-hero--tv">
        <div className="service-hero-copy">
          <p className="eyebrow">Cable TV</p>
          <h1>Cable TV questions, answered clearly.</h1>
          <p className="hero-description">
            General informational support related to cable TV services for your household.
          </p>
          <CtaPair />
        </div>
        <div className="service-hero-image-wrap">
          <img className="service-hero-image" src={television} alt="Television in a living room" />
        </div>
      </section>

      <section className="section-block content-width" style={{ paddingTop: 72 }}>
        <SectionIntro
          eyebrow="Programming topics"
          title="Understand common cable TV terms."
          text="Lineups and terms vary by provider. Your provider is the source for specifics."
        />
        <CardGrid items={genres} />
      </section>

      <PhotoStory
        image={connectedHome}
        alt="A connected home with a television"
        title="TV and your home setup."
        text="Equipment and connections can affect how TV works in your home."
        items={[
          "How many TVs are in your home",
          "What equipment your provider supplied",
          "Which questions to ask your provider",
        ]}
      />

      <PhotoStory
        reverse
        image={contactCall}
        alt="Person on a call about cable TV topics"
        title="Have a question?"
        text="Call to receive general information from an advisor."
      />

      <Faq items={faqs} />

      <section className="callout-band">
        <h2>Questions about cable TV topics?</h2>
        <CallButton />
      </section>
    </main>
  );
}
