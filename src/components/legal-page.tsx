import { Link } from "@tanstack/react-router";

import { emailAddress, emailHref } from "@/lib/site-config";
import { usePageMeta } from "@/lib/use-page-meta";

export interface LegalSectionData {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export function LegalPage({
  title,
  updated = "October 2026",
  intro,
  sections,
}: {
  title: string;
  updated?: string;
  intro: string;
  sections: LegalSectionData[];
}) {
  usePageMeta(title, intro);
  return (
    <main className="legal-main">
      <article className="narrow-width">
        <p className="eyebrow">Aeronet Impex · Information</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Last updated {updated}</p>
        <section className="legal-section">
          <p>{intro}</p>
        </section>
        {sections.map((section) => (
          <section className="legal-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section className="legal-section">
          <h2>Questions?</h2>
          <p>
            For questions about this information, please <Link to="/contact">contact us</Link> or
            email <a href={emailHref}>{emailAddress}</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
