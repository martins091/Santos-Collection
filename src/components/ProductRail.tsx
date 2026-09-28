"use client";

import Image from "next/image";
import { useRef } from "react";
import { pieces, waLink } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export default function ProductRail() {
  const rail = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 300) + 24), behavior: "smooth" });
  };

  return (
    <div className="rail-wrap">
      <div className="rail-controls">
        <button type="button" className="round-btn" onClick={() => scroll(-1)} aria-label="Previous pieces">
          <ArrowIcon className="ic flip" />
        </button>
        <button type="button" className="round-btn" onClick={() => scroll(1)} aria-label="More pieces">
          <ArrowIcon className="ic" />
        </button>
      </div>
      <ul className="rail" ref={rail}>
        {pieces.map((p) => (
          <li key={p.src} className="piece">
            <a href={waLink(`Hello Santos Collection, is the ${p.name} available in my size?`)} target="_blank" rel="noopener">
              <div className="piece-media">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 78vw, (max-width: 1020px) 42vw, 26vw" style={{ objectFit: "cover", objectPosition: "50% 38%" }} />
                <span className="piece-tag">{p.note}</span>
              </div>
              <div className="piece-body">
                <h3>{p.name}</h3>
                <span className="piece-cta">
                  Price on request · Ask on WhatsApp <ArrowIcon className="ic" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
