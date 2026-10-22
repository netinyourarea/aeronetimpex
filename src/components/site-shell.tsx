import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Mail, Menu, Phone, Radio, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  disclaimerText,
  emailAddress,
  emailHref,
  independenceStatement,
  legalBusinessName,
  legalNavigation,
  footerOldPhoneDisplay,
  footerOldPhoneHref,
  phoneDisplay,
  phoneHref,
  siteName,
  siteNavigation,
} from "@/lib/site-config";

export function CallButton({
  children = phoneDisplay,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild className={`button-call ${className}`}>
      <a href={phoneHref}>
        <Phone aria-hidden="true" />
        {children}
      </a>
    </Button>
  );
}

/** Independence statement + disclaimer shown near calls to action. */
export function ComplianceNote({ full = false }: { full?: boolean }) {
  return (
    <p className="compliance-note" role="note">
      {full ? disclaimerText : independenceStatement}
    </p>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand-mark"
          aria-label={`${siteName} home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-symbol">
            <Radio size={18} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span>{siteName}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {siteNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link${pathname === item.to ? " nav-link-active" : ""}`}
              aria-current={pathname === item.to ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <CallButton className="header-call" />
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="mobile-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {siteNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`mobile-nav-link${pathname === item.to ? " nav-link-active" : ""}`}
              aria-current={pathname === item.to ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
          <a className="mobile-nav-link" href={phoneHref} onClick={() => setMenuOpen(false)}>
            {phoneDisplay}
            <Phone size={15} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <div>
            <p className="footer-cta-label">Questions? Call us</p>
            <a className="footer-cta-phone" href={phoneHref}>
              <Phone size={24} aria-hidden="true" /> {phoneDisplay}
            </a>
          </div>
          <p className="footer-cta-note">Not an ISP. No brand affiliation.</p>
        </div>

        <div className="footer-top">
          <div className="footer-brand-column">
            <Link to="/" className="brand-mark footer-brand">
              <span className="brand-symbol">
                <Radio size={17} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span>{siteName}</span>
            </Link>
            <p className="footer-copy">
              General guidance on home internet, Wi-Fi, and cable TV topics.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
            <div className="footer-link-list">
              {siteNavigation.map((item) => (
                <Link key={item.to} className="footer-link" to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="footer-heading">Information</h2>
            <div className="footer-link-list">
              {legalNavigation.map((item) => (
                <Link key={item.to} className="footer-link" to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="footer-heading">Contact</h2>
            <p className="footer-legal-name">{legalBusinessName}</p>
            <a className="footer-contact" href={phoneHref}>
              <Phone size={15} aria-hidden="true" /> {phoneDisplay}
            </a>
            <a className="footer-contact" href={footerOldPhoneHref}>
              <Phone size={15} aria-hidden="true" /> {footerOldPhoneDisplay}
            </a>
            <a className="footer-contact" href={emailHref}>
              <Mail size={15} aria-hidden="true" /> {emailAddress}
            </a>
          </div>
        </div>

        <p className="footer-disclaimer">
          <strong>Disclaimer:</strong> {disclaimerText}
        </p>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {legalBusinessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <a className="mobile-call-bar" href={phoneHref}>
      <Phone size={17} aria-hidden="true" />
      {phoneDisplay}
    </a>
  );
}

export function TextArrowLink({
  href,
  children,
  to,
}: {
  href?: string;
  children: React.ReactNode;
  to?: "/internet-services" | "/cable-tv-services" | "/contact";
}) {
  const content = (
    <>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </>
  );
  if (to)
    return (
      <Link className="text-link" to={to}>
        {content}
      </Link>
    );
  return (
    <a className="text-link" href={href ?? phoneHref}>
      {content}
    </a>
  );
}
