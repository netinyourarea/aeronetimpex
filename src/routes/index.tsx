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
    title: "Talk to a real person",
    text: "Call and describe your internet, Wi-Fi, or outage problem in your own words.",
  },
  {
    icon: MapPin,
    title: "Practical troubleshooting",
    text: "Walk through common steps for slow speeds, dropped Wi-Fi, and lost connections.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by design",
    text: "We tell you who we are and who we are not before you call.",
  },
];

const topics = [
  {
    title: "Internet not working",
    text: "No connection, slow speeds, or random drops: what to check first.",
    image: fiber,
    imageAlt: "Fiber optic cables",
  },
  {
    title: "Wi-Fi problems",
    text: "Dead zones, weak signal, and devices that will not connect.",
    image: homeRouter,
    imageAlt: "Home Wi-Fi router",
  },
  {
    title: "Service outages",
    text: "How to tell if it is your home or a wider outage, and what to do next.",
    image: television,
    imageAlt: "Living room television",
  },
];

const concerns = [
  {
    icon: Wifi,
    title: "Internet is down",
    text: "Lights blinking, no signal, or nothing loads on any device.",
  },
  {
    icon: Router,
    title: "Slow or unstable Wi-Fi",
    text: "Buffering, lag, and weak signal in certain rooms.",
  },
  {
    icon: Tv,
    title: "Outage in your area",
    text: "Not sure if it is a local outage? We can help you check the signs.",
  },
  {
    icon: MessageSquareText,
    title: "Router and modem setup",
    text: "Connecting, restarting, and placing your equipment.",
  },
  {
    icon: HelpCircle,
    title: "Cable TV signal",
    text: "No picture, pixelation, or channels missing.",
  },
  {
    icon: PhoneCall,
    title: "Not sure what is wrong?",
    text: "Give us a call and we will help you narrow it down.",
  },
];

const steps = [
  ["Call us", "Tell us whether your internet is down, slow, or your Wi-Fi is acting up."],
  [
    "Describe the problem",
    "Share what you see: modem lights, which devices are affected, and when it started.",
  ],
  [
    "Get guided steps",
    "Work through troubleshooting and outage checks with an advisor on the line.",
  ],
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
    a: "You speak with an advisor who helps you work through internet, Wi-Fi, and outage problems step by step.",
  },
  {
    q: "Do I need to fill out a form?",
    a: "No. We do not take requests through forms. Just call and talk to an advisor.",
  },
  {
    q: "How do I know if it is an outage?",
    a: "If every device is offline, your modem lights look abnormal, and restarting does not help, it may be an outage. Your provider can confirm outages in your area.",
  },
];

function HomePage() {
  usePageMeta(
    "Internet, Wi-Fi & Outage Help",
    "Call for help with slow internet, Wi-Fi problems, connection drops, and service outages.",
  );
  return (
    <main>
      <section className="hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Internet · Wi-Fi · Outages</p>
          <h1>
            Lost your connection? <span>Let's get you back online.</span>
          </h1>
          <p className="hero-description">
            Slow speeds, dropped connections, dead zones, or a suspected outage? Call and talk to an
            advisor who will walk you through it. No forms needed.
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
        <SectionIntro eyebrow="Topics" title="What you can call us about." />
        <CardGrid items={topics} />
      </section>

      <section className="section-block content-width">
        <SectionIntro
          eyebrow="Common concerns"
          title="Problems we help with."
          text="If any of these sound familiar, a short call can help you sort it out."
        />
        <CardGrid items={concerns} />
      </section>

      <section className="service-feature content-width">
        <img className="feature-image" src={homeRouter} alt="Home Wi-Fi router" />
        <div className="feature-copy">
          <h2>Internet, Wi-Fi, and outage help</h2>
          <p>Learn what to check when your connection is slow, drops, or goes out completely.</p>
          <TextArrowLink to="/internet-services">Internet and outage help</TextArrowLink>
        </div>
      </section>

      <section className="entertainment-band">
        <div className="entertainment-copy">
          <p className="eyebrow">Cable TV</p>
          <h2>Cable TV not working too?</h2>
          <p>TV and internet often share equipment. Call about both at once.</p>
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
        text="Having a few details ready helps us find the problem faster."
        items={[
          "What is happening: no internet, slow speeds, or Wi-Fi drops",
          "When it started and whether other devices are affected",
          "The lights showing on your modem or router",
        ]}
      />

      <Faq items={faqs} />

      <section className="final-cta">
        <h2>Internet or Wi-Fi not working? Call now.</h2>
        <CallButton />
      </section>
    </main>
  );
}
