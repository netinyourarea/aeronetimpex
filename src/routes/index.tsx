import { createFileRoute } from "@tanstack/react-router";
import {
  Headphones,
  HelpCircle,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Router,
  ShieldCheck,
  Tv,
  Wifi,
} from "lucide-react";

import connectedHome from "@/assets/connected-home.jpg";
import contactCall from "@/assets/contact-call.jpg";
import fiber from "@/assets/fiber-connectivity.jpg";
import homeRouter from "@/assets/home-router.jpg";
import television from "@/assets/television-living-room.jpg";
import { CardGrid, CtaPair, Faq, PhotoStory, Scope, SectionIntro } from "@/components/sections";
import { CallButton, TextArrowLink } from "@/components/site-shell";
import { independenceStatement } from "@/lib/site-config";
import { usePageMeta } from "@/lib/use-page-meta";

export const Route = createFileRoute("/")({ component: HomePage });

const principles = [
  {
    icon: Headphones,
    title: "Plain-language answers",
    text: "Speak with an advisor who explains internet and cable TV topics clearly.",
  },
  {
    icon: MapPin,
    title: "Informational support",
    text: "Understand common terms, options, and how service provider processes work.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by design",
    text: "We tell you who we are and who we are not before you call.",
  },
];

const topics = [
  {
    title: "Home internet",
    text: "Connection types, speeds in everyday terms, and common questions.",
    image: fiber,
    imageAlt: "Fiber optic cables",
  },
  {
    title: "Wi-Fi at home",
    text: "Router placement, coverage, and connecting more devices.",
    image: homeRouter,
    imageAlt: "Home Wi-Fi router",
  },
  {
    title: "Cable TV",
    text: "Common terms, equipment, and what to ask your provider.",
    image: television,
    imageAlt: "Living room television",
  },
];

const concerns = [
  {
    icon: Wifi,
    title: "Slow or unstable Wi-Fi",
    text: "General tips on placement and interference.",
  },
  {
    icon: Router,
    title: "Router and modem basics",
    text: "What each device does and how they connect.",
  },
  {
    icon: Tv,
    title: "TV picture or signal",
    text: "Common reasons a cable TV signal may be affected.",
  },
  {
    icon: MessageSquareText,
    title: "Talking to your provider",
    text: "How to prepare for a call with your service provider.",
  },
  {
    icon: HelpCircle,
    title: "Understanding terms",
    text: "Plain-language meanings for common service terms.",
  },
  {
    icon: PhoneCall,
    title: "Just a quick question",
    text: "Not sure where to begin? Give us a call.",
  },
];

const steps = [
  ["Call us", "Tell us which internet or cable TV topic you have a question about."],
  ["Share a few details", "Describe your concern and the devices or TVs involved."],
  ["Get general guidance", "Receive informational support you can use with your provider."],
];

const faqs = [
  {
    q: "Are you an internet or cable provider?",
    a: "No. We do not provide internet or cable services and we do not sell subscriptions.",
  },
  {
    q: "Are you the official support line for any brand?",
    a: "No. We do not provide official customer support for any brand and are not affiliated with, authorized by, or endorsed by any provider.",
  },
  {
    q: "Can you guarantee a technical fix?",
    a: "No. We offer general guidance and informational support only, and we do not guarantee outcomes.",
  },
  {
    q: "What happens when I call?",
    a: "You speak with an advisor who offers general information about internet, broadband, Wi-Fi, and cable TV topics.",
  },
];

function HomePage() {
  usePageMeta(
    "Home Internet & Cable TV Guidance",
    "General guidance and informational support for home internet, Wi-Fi, and cable TV questions.",
  );
  return (
    <main>
      <section className="hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Internet · Wi-Fi · Cable TV</p>
          <h1>
            Clear answers for your <span>home internet and TV.</span>
          </h1>
          <p className="hero-description">
            Have a question about your connection, Wi-Fi, or cable TV? Talk it through with an
            advisor and get straightforward, general guidance.
          </p>
          <CtaPair />
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={connectedHome}
            alt="A connected home with devices online"
          />
        </div>
      </section>

      <section className="section-block content-width" style={{ paddingTop: 88 }}>
        <SectionIntro eyebrow="Who we are" title="Here to help you understand." />
        <p className="section-lede">{independenceStatement}</p>
      </section>

      <Scope />

      <section className="section-block content-width">
        <SectionIntro eyebrow="Topics" title="What you can ask us about." />
        <CardGrid items={topics} />
      </section>

      <section className="section-block content-width">
        <SectionIntro
          eyebrow="Common concerns"
          title="Questions we hear often."
          text="If any of these sound familiar, a short call may help you sort it out."
        />
        <CardGrid items={concerns} />
      </section>

      <section className="service-feature content-width">
        <img className="feature-image" src={homeRouter} alt="Home Wi-Fi router" />
        <div className="feature-copy">
          <h2>Internet and broadband topics</h2>
          <p>
            Learn about general connection types, Wi-Fi basics, and common connectivity concerns.
          </p>
          <TextArrowLink to="/internet-services">Internet information</TextArrowLink>
        </div>
      </section>

      <section className="entertainment-band">
        <div className="entertainment-copy">
          <p className="eyebrow">Cable TV</p>
          <h2>General cable TV information.</h2>
          <p>Understand common cable TV terms and equipment topics.</p>
          <TextArrowLink to="/cable-tv-services">Cable TV information</TextArrowLink>
        </div>
        <img className="entertainment-image" src={television} alt="Living room television" />
      </section>

      <section className="section-block content-width" style={{ paddingTop: 96 }}>
        <SectionIntro eyebrow="Our approach" title="Transparency, clarity, and care." />
        <CardGrid items={principles} />
      </section>

      <section className="how-section content-width">
        <div className="how-heading-row">
          <h2 className="section-heading">How it works</h2>
        </div>
        <div className="how-list">
          {steps.map(([title, text], i) => (
            <div className="how-step" key={title}>
              <span className="step-number">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <PhotoStory
        image={contactCall}
        alt="Person speaking with an advisor on the phone"
        title="Before you call."
        text="Having a few details ready helps keep the conversation focused."
        items={[
          "A short description of your question or concern",
          "The name of your current service provider, if any",
          "The devices or TVs you are asking about",
        ]}
      />

      <Faq items={faqs} />

      <section className="final-cta">
        <h2>Questions about internet or cable TV?</h2>
        <CallButton />
      </section>
    </main>
  );
}
