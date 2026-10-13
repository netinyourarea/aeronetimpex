import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { phoneDisplay, phoneHref } from "@/lib/site-config";

const STORAGE_KEY = "promo-popup-seen";
const DELAY_MS = 5000;

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // storage unavailable; popup may show again on next load
  }
}

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alreadySeen()) return;
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) markSeen();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="promo-popup max-w-md text-center">
        <DialogHeader className="items-center text-center sm:text-center">
          <DialogTitle className="promo-popup-title">Internet or Cable Not Working?</DialogTitle>
          <DialogDescription className="promo-popup-text">
            Get instant help for slow internet, outages, setup issues, or cable problems.
          </DialogDescription>
        </DialogHeader>
        <Button asChild className="button-call promo-popup-button" onClick={markSeen}>
          <a href={phoneHref}>
            <Phone aria-hidden="true" />
            CALL SUPPORT NOW
          </a>
        </Button>
        <a className="promo-popup-number" href={phoneHref}>
          {phoneDisplay}
        </a>
        <p className="promo-popup-trust">Quick assistance • No forms • Talk to a real agent</p>
      </DialogContent>
    </Dialog>
  );
}
