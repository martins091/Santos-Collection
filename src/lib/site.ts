export const site = {
  name: "Santos Collection",
  phone: "0802 091 9409",
  phoneHref: "tel:+2348020919409",
  whatsapp: "https://wa.me/2348020919409",
  instagram: "https://www.instagram.com/santoscollection/",
  instagramHandle: "@santoscollection",
  street: "68 Adeniran Ogunsanya Street",
  area: "Surulere, Lagos",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Santos+Collection+68+Adeniran+Ogunsanya+Street+Surulere+Lagos",
  rating: "5.0",
  reviewCount: 13,
};

export function waLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Piece = {
  src: string;
  name: string;
  note: string;
  alt: string;
};

export const pieces: Piece[] = [
  {
    src: "/images/emerald-gown.jpg",
    name: "Emerald cowl-neck gown",
    note: "Occasion",
    alt: "Emerald shimmer gown with a draped cowl neckline and corset bodice",
  },
  {
    src: "/images/leopard-gown.jpg",
    name: "Leopard fluted-sleeve gown",
    note: "Evening",
    alt: "Floor-length leopard print gown with fluted sleeves and a peplum waist",
  },
  {
    src: "/images/sage-gown.jpg",
    name: "Sage ruffle maxi",
    note: "Occasion",
    alt: "Sage green plunge-neck maxi dress with cut-outs and cascading ruffles",
  },
  {
    src: "/images/monochrome-gown.jpg",
    name: "Monochrome corset gown",
    note: "Evening",
    alt: "Black and ivory patterned gown with a sculpted corset bodice",
  },
  {
    src: "/images/mocha-dress.jpg",
    name: "Mocha ruched mini",
    note: "Party",
    alt: "Ruched mocha mini dress with a jewelled neckline and faux-fur cuffs",
  },
  {
    src: "/images/floral-dress.jpg",
    name: "Rose-print draped midi",
    note: "Everyday",
    alt: "Black midi dress with a red rose print and draped neckline",
  },
];
