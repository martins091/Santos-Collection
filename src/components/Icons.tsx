type P = { className?: string };

export function WhatsAppIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h15m-5-6 6 6-6 6" />
    </svg>
  );
}

export function Stars({ className }: P) {
  return (
    <span className={`stars ${className ?? ""}`} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" d="m10 1.6 2.47 5.3 5.8.68-4.29 3.97 1.15 5.73L10 14.4l-5.13 2.88 1.15-5.73L1.73 7.58l5.8-.68L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

/** SC monogram set inside the boutique's signature arch. */
export function Monogram({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 34 42" aria-hidden="true">
      <path d="M1 41V17a16 16 0 0 1 32 0v24z" fill="var(--green)" />
      <path d="M5.5 41V17.5a11.5 11.5 0 0 1 23 0V41" fill="none" stroke="#C9AE7A" strokeWidth="0.9" />
      <text x="17" y="32" textAnchor="middle" fontFamily="var(--font-serif), Georgia, serif" fontSize="13" letterSpacing="-0.5" fill="#EEE7D9">
        SC
      </text>
    </svg>
  );
}
