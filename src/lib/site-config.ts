export const siteName = "Aeronet Impex";

// TODO: replace the legal business name and email with the real details.
export const legalBusinessName = "Aeronet Impex";
export const phoneDisplay = "(833) 457-7986";
export const phoneHref = "tel:+18334577986";
export const emailAddress = "info@example.com";
export const emailHref = `mailto:${emailAddress}`;

export const primaryCta = "Talk to a Third-Party Internet Advisor";
export const secondaryCta = "Call for Independent Service Guidance";
export const ctaMicrotext = "Not an ISP. No brand affiliation.";

export const independenceStatement = `${siteName} is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.`;

export const disclaimerText = `${siteName} is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.`;

export const siteNavigation = [
  { label: "Home", to: "/" },
  { label: "Internet", to: "/internet-services" },
  { label: "Cable TV", to: "/cable-tv-services" },
  { label: "Contact", to: "/contact" },
] as const;

export const legalNavigation = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Refund Policy", to: "/refund-policy" },
] as const;
