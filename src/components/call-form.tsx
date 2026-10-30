import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { phoneDisplay, phoneHref } from "@/lib/site-config";

/**
 * Visual-only form. Nothing is stored or sent: submitting it places a phone call,
 * because the goal of this site is phone calls, not form leads.
 */
export function CallForm() {
  return (
    <form
      className="call-form"
      aria-label="Call us about your internet"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = phoneHref;
      }}
    >
      <h2>Prefer to call? It is faster.</h2>
      <p>This form is not submitted anywhere. Tap the button to call an advisor now.</p>
      <div className="call-form-fields">
        <Input type="text" placeholder="Your name" aria-label="Your name" autoComplete="off" />
        <Input
          type="text"
          placeholder="What is happening? (internet down, slow Wi-Fi, outage)"
          aria-label="What is happening"
          autoComplete="off"
        />
      </div>
      <Button type="submit" className="button-call">
        <Phone aria-hidden="true" />
        Call {phoneDisplay}
      </Button>
    </form>
  );
}
