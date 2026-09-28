"use client";

import { useEffect, useState } from "react";
import { Monogram, WhatsAppIcon } from "./Icons";
import { site, waLink } from "@/lib/site";

const links = [
  { href: "#edit", label: "The Edit" },
  { href: "#new-in", label: "New in" },
  { href: "#delivery", label: "Same-day delivery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowFloat(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Santos Collection, back to top">
            <Monogram className="brand-mark" />
            <span className="brand-word">
              <b>Santos Collection</b>
              <span>Surulere · Lagos</span>
            </span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-primary btn-sm" href={waLink("Hello Santos Collection, I'd love some help choosing an outfit.")} target="_blank" rel="noopener">
              <WhatsAppIcon className="ic" />
              <span className="hide-sm">Order on WhatsApp</span>
              <span className="show-sm">WhatsApp</span>
            </a>
            <button className="menu-btn" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p>
          {site.street}, {site.area}
          <br />
          <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </div>

      <a
        className={`float-wa${showFloat ? " show" : ""}`}
        href={waLink("Hello Santos Collection, I'd like to place an order.")}
        target="_blank"
        rel="noopener"
        aria-label="Order on WhatsApp"
      >
        <WhatsAppIcon className="ic" />
        Order now
      </a>
    </>
  );
}
