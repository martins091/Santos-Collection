"use client";

import { useState } from "react";

export default function CopyPhone({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      const t = document.createElement("textarea");
      t.value = phone;
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" className={`mini-btn${copied ? " done" : ""}`} onClick={copy} aria-live="polite">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 9h10v12H9zM5 15V3h10" />
      </svg>
      {copied ? "Copied" : "Copy number"}
    </button>
  );
}
