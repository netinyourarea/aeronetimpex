import type { LucideIcon } from "lucide-react";
import { Check, X } from "lucide-react";

import { CallButton } from "@/components/site-shell";
import { ctaMicrotext, siteName } from "@/lib/site-config";

export interface CardItem {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  icon?: LucideIcon;
}

export function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function CardGrid({ items, two = false }: { items: CardItem[]; two?: boolean }) {
  return (
    <div className={`card-grid${two ? " card-grid--two" : ""}`}>
      {items.map(({ title, text, image, imageAlt, icon: Icon }) => (
        <article className="info-card" key={title}>
          {image && <img src={image} alt={imageAlt ?? ""} loading="lazy" />}
          <div className="info-card-body">
            {Icon && (
              <span className="info-card-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
            )}
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CheckList({ items, negative = false }: { items: string[]; negative?: boolean }) {
  const Icon = negative ? X : Check;
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Icon size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PhotoStory({
  image,
  alt,
  title,
  text,
  items,
  reverse = false,
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
  items?: string[];
  reverse?: boolean;
}) {
  return (
    <section className={`photo-story content-width${reverse ? " photo-story--reverse" : ""}`}>
      <img className="photo-story-image" src={image} alt={alt} loading="lazy" />
      <div className="photo-story-copy">
        <h2>{title}</h2>
        <p>{text}</p>
        {items && <CheckList items={items} />}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="section-block content-width">
      <SectionIntro eyebrow="FAQ" title="Common questions" />
      <div className="faq-list">
        {items.map(({ q, a }) => (
          <details className="faq-item" key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaPair() {
  return (
    <>
      <div className="hero-actions">
        <CallButton />
      </div>
      <p className="cta-microtext">{ctaMicrotext}</p>
    </>
  );
}

const doItems = [
  "Troubleshoot internet that is slow, down, or dropping",
  "Fix Wi-Fi dead zones, weak signal, and device connection problems",
  "Recognize the signs of a service outage and know what to do next",
  "Get help with cable TV signal and equipment questions",
];

const dontItems = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any brand",
  "We are not affiliated, authorized, or endorsed by any telecom or cable company",
  "We do not sell internet or cable subscriptions",
  "We do not provide guaranteed technical fixes",
];

export function Scope() {
  return (
    <section className="scope content-width">
      <div className="scope-grid">
        <article className="scope-card scope-card--do">
          <span className="scope-badge">What we do</span>
          <h2>At {siteName}, we help users:</h2>
          <ol className="scope-list">
            {doItems.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="scope-foot">
            Call us and talk to an advisor. We do not take requests through web forms.
          </p>
        </article>
        <article className="scope-card scope-card--dont">
          <span className="scope-badge">What we do not do</span>
          <h2>To avoid confusion, please note:</h2>
          <ol className="scope-list">
            {dontItems.map((item) => (
              <li key={item}>
                <X size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="scope-foot">
            All mentions of providers, if any, are strictly for informational purposes only.
          </p>
        </article>
      </div>
    </section>
  );
}
