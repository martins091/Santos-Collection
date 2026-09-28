"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DURATION = 6500;

const slides = [
  { src: "/images/interior.jpg", caption: "Inside the boutique", alt: "Inside Santos Collection: rails of dresses, arched shelves of handbags and the lit Santos Collection sign", origin: "50% 30%" },
  { src: "/images/emerald-gown.jpg", caption: "Emerald cowl-neck gown", alt: "Emerald shimmer gown with a draped cowl neckline under the boutique's flower arch", origin: "50% 35%" },
  { src: "/images/leopard-gown.jpg", caption: "Leopard fluted-sleeve gown", alt: "Leopard print gown with fluted sleeves under the flower arch", origin: "50% 25%" },
  { src: "/images/monochrome-gown.jpg", caption: "Monochrome corset gown", alt: "Black and ivory corset gown under the flower arch", origin: "50% 30%" },
  { src: "/images/storefront.jpg", caption: "68 Adeniran Ogunsanya, Surulere", alt: "The Santos Collection shopfront with its SC logo and window displays", origin: "40% 30%" },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setPrev(index);
      setIndex((index + 1) % slides.length);
    }, DURATION);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="stage"
      aria-roledescription="carousel"
      aria-label="Santos Collection in pictures"
    >
      <div className="stage-frame">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`slide${i === index ? " is-active" : ""}${i === prev ? " is-prev" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="kb" style={{ transformOrigin: s.origin }}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "eager"}
                sizes="(max-width: 1020px) 92vw, 44vw"
                style={{ objectFit: "cover", objectPosition: s.origin }}
              />
            </div>
          </div>
        ))}
        <div className="stage-scrim" aria-hidden="true" />
        <div className="stage-meta">
          <p className="stage-caption" aria-live="polite">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {slides[index].caption}
          </p>
          <div className="stage-bars">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`bar${i === index ? " is-active" : ""}${i < index ? " is-done" : ""}`}
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${s.caption}`}
                style={{ ["--dur" as string]: `${DURATION}ms` }}
              >
                <i key={i === index ? `a${index}` : "idle"} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
