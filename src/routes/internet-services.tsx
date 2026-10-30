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
    title: "No internet or outages",
    text: "Check modem lights, restart safely, and learn whether a wider outage may be the cause.",
    image: fiber,
    imageAlt: "Fiber optic cables",
  },
  {
    title: "Wi-Fi and routers",
    text: "Fix weak signal, dead zones, and devices that keep disconnecting.",
    image: homeRouter,
    imageAlt: "Home Wi-Fi router",
  },
  {
    title: "Slow speeds",
    text: "Find out why a busy home network slows down and what you can change.",
    image: connectedHome,
    imageAlt: "Connected home",
  },
];

const uses = [
  {
    icon: Tv,
    title: "Streaming",
    text: "Fix buffering and freezing on every screen in the house.",
  },
  {
    icon: Laptop,
    title: "Working from home",
    text: "Keep video calls and uploads stable when the connection drops.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    text: "Reduce lag and disconnects with the right setup.",
  },
];

const faqs = [
  {
    q: "Do you provide internet service?",
    a: "No. We are not an Internet Service Provider and do not sell internet subscriptions.",
  },
  {
    q: "Can you help if my internet is out?",
    a: "Yes, call and we will walk you through checks for your equipment and signs of an outage. We cannot guarantee a fix, and only your provider can restore service on its network.",
  },
  {
    q: "What if it is an outage in my area?",
    a: "We can help you recognize the signs and point you to what to do next, such as checking with your provider. Outages are resolved by the provider.",
  },
  {
    q: "Do I have to submit a form?",
    a: "No. Just call. Our advisors take your questions by phone only.",
  },
  {
    q: "Can you help me navigate my provider's process?",
    a: "We can share general information about how service provider processes typically work. Account actions are handled by your provider.",
  },
];

function InternetPage() {
  usePageMeta(
    "Internet, Wi-Fi & Outage Help",
    "Call for help with internet outages, slow speeds, and Wi-Fi problems at home.",
  );
  return (
    <main>
      <section className="service-hero">
        <div className="service-hero-copy">
          <p className="eyebrow">Internet · Wi-Fi · Outages</p>
          <h1>Internet down or Wi-Fi slow? Call us.</h1>
          <p className="hero-description">
            Get help with outages, dropped connections, slow speeds, and Wi-Fi dead zones. Call and
            an advisor will guide you through it.
          </p>
          <CtaPair />
        </div>
        <div className="service-hero-image-wrap">
          <img className="service-hero-image" src={homeRouter} alt="Home Wi-Fi router" />
        </div>
      </section>

      <section className="section-block content-width" style={{ paddingTop: 72 }}>
        <SectionIntro eyebrow="Topics" title="What we can help you with." />
        <CardGrid items={topics} />
      </section>

      <section className="section-block content-width">
        <SectionIntro eyebrow="By use" title="Problems by how you use the internet." />
        <CardGrid items={uses} />
      </section>

      <PhotoStory
        reverse
        image={connectedHome}
        alt="A home with many connected devices"
        title="When it might be an outage."
        text="Signs to look for. Call and we will help you sort out equipment trouble from a wider outage."
        items={[
          "Every device is offline at the same time",
          "Modem lights are off, red, or blinking",
          "Restarting your equipment does not help",
        ]}
      />

      <Faq items={faqs} />

      <section className="callout-band">
        <h2>Internet or Wi-Fi not working? Call now.</h2>
        <CallButton />
      </section>
    </main>
  );
}
