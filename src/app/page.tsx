import Image from "next/image";
import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import ProductRail from "@/components/ProductRail";
import CopyPhone from "@/components/CopyPhone";
import RevealObserver from "@/components/RevealObserver";
import { ArrowIcon, InstagramIcon, Stars, WhatsAppIcon } from "@/components/Icons";
import { site, waLink } from "@/lib/site";

const edit = [
  {
    n: "01",
    title: "Occasionwear",
    tag: "Weddings · Dinners · Celebrations",
    copy: "Gowns and statement dresses with real presence, fitted for the evening you've been planning for weeks.",
    cta: "Ask about occasionwear",
    msg: "Hello Santos Collection, I'm looking for an occasion outfit.",
    src: "/images/sage-gown.jpg",
    alt: "Sage green ruffle maxi dress under the boutique's flower arch",
  },
  {
    n: "02",
    title: "Everyday classics",
    tag: "Office · Brunch · Weekend",
    copy: "Easy, well-cut pieces that go from a Monday meeting to a Saturday brunch without trying too hard.",
    cta: "See everyday pieces",
    msg: "Hello Santos Collection, I'd like to see your everyday pieces.",
    src: "/images/floral-dress.jpg",
    alt: "Rose-print draped midi dress on a mannequin",
  },
  {
    n: "03",
    title: "Gifting",
    tag: "Same-day · Across Lagos",
    copy: "Forgot a birthday? Tell us who it's for. We'll help you choose, and it can be at her door in about 45 minutes.",
    cta: "Send a gift today",
    msg: "Hello Santos Collection, I'd like to send a gift with same-day delivery.",
    src: "/images/mocha-dress.jpg",
    alt: "Mocha ruched mini dress with faux-fur cuffs",
  },
];

const quotes = [
  { text: "Always a lovely experience shopping here. Beautiful outfits, great quality, and excellent customer service.", who: "Chekubay L." },
  { text: "Bought a dress here as a gift for a friend. Customer service was excellent — responsive, helpful, made the whole process easy.", who: "Samson D." },
  { text: "Same-day delivery in about 45 minutes, and the dress was absolutely beautiful — my perfect fit.", who: "Verified customer" },
];

const marquee = ["Occasionwear", "Everyday classics", "Gifting", "Same-day delivery", "Personally styled", "Surulere, Lagos"];

export default function Home() {
  return (
    <>
      <RevealObserver />
      <div className="announce" id="top">
        Same-day delivery across Lagos — often at your door in about 45 minutes.{" "}
        <a href={waLink("Hello Santos Collection, I'd like to place an order for same-day delivery.")} target="_blank" rel="noopener">
          Order on WhatsApp
        </a>
      </div>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">Women&apos;s boutique · Surulere, Lagos</p>
              <h1 className="reveal d1">
                Dressed for the moment. <em>Delivered</em> before it begins.
              </h1>
              <p className="lede reveal d2">
                Tastefully curated occasionwear, everyday classics and thoughtful gifts — chosen piece by piece, styled with you over WhatsApp,
                and delivered across Lagos the same day.
              </p>
              <div className="cta-row reveal d3">
                <a className="btn btn-primary" href={waLink("Hello Santos Collection, I'd like to place an order.")} target="_blank" rel="noopener">
                  <WhatsAppIcon className="ic" />
                  Order on WhatsApp
                </a>
                <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noopener">
                  <InstagramIcon className="ic" />
                  See new arrivals
                </a>
              </div>
              <div className="proof reveal d3">
                <div>
                  <strong>
                    5.0 <Stars />
                  </strong>
                  Rated on Google · {site.reviewCount} reviews
                </div>
                <div>
                  <strong>~45 min</strong>Same-day delivery in Lagos
                </div>
                <div>
                  <strong>One-to-one</strong>Personal styling on WhatsApp
                </div>
              </div>
            </div>

            <div className="hero-visual reveal d2">
              <HeroSlideshow />
              <div className="badge" aria-hidden="true">
                <svg className="ring" viewBox="0 0 132 132">
                  <defs>
                    <path id="ring-path" d="M66 66m-50 0a50 50 0 1 1 100 0a50 50 0 1 1-100 0" />
                  </defs>
                  <text fontFamily="var(--font-sans), sans-serif" fontSize="9.2" letterSpacing="3.1" fill="#C9AE7A">
                    <textPath href="#ring-path">SAME-DAY DELIVERY · ACROSS LAGOS · </textPath>
                  </text>
                </svg>
                <div className="badge-core">
                  <b>45</b>
                  <span>minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="strip" aria-hidden="true">
          <div className="strip-track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* THE EDIT */}
        <section className="section" id="edit">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow reveal">The Edit</p>
                <h2 className="reveal d1">
                  Fewer pieces, <em>chosen</em> with care.
                </h2>
              </div>
              <p className="lede reveal d2">
                Every piece in the boutique is picked by hand. No endless racks — just a considered selection for the days that matter, and
                every day in between.
              </p>
            </div>

            <div className="edit-grid">
              {edit.map((e, i) => (
                <a key={e.n} className={`tile reveal d${i}`} href={waLink(e.msg)} target="_blank" rel="noopener">
                  <div className="tile-media">
                    <span className="tile-num">{e.n}</span>
                    <Image src={e.src} alt={e.alt} fill sizes="(max-width: 760px) 92vw, 31vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
                  </div>
                  <div className="tile-body">
                    <span className="tile-tag">{e.tag}</span>
                    <h3>{e.title}</h3>
                    <p>{e.copy}</p>
                    <span className="link-arrow">
                      {e.cta} <ArrowIcon className="ic" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="section story">
          <div className="story-arch" aria-hidden="true" />
          <div className="story-arch two" aria-hidden="true" />
          <div className="wrap story-grid">
            <div>
              <p className="eyebrow reveal">The Santos way</p>
              <blockquote className="reveal d1">
                Not a warehouse of clothes. <em>A wardrobe someone chose for you</em> — and a real person on the other end of the message.
              </blockquote>
            </div>
            <div className="reveal d2">
              <p>
                Shopping at Santos Collection feels less like checking out and more like asking a friend with very good taste. Send a message,
                share the occasion, and we&apos;ll suggest pieces that suit you — then make sure they reach you in time.
              </p>
              <p>It&apos;s why our customers come back, and why so many first visits start with a gift for someone else.</p>
            </div>
          </div>
        </section>

        {/* NEW IN */}
        <section className="section" id="new-in">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow reveal">New in the boutique</p>
                <h2 className="reveal d1">
                  Under the arch <em>this week</em>.
                </h2>
              </div>
              <p className="lede reveal d2">
                A few of the pieces on the floor right now. Tap any piece to check your size — stock moves quickly.
              </p>
            </div>
          </div>
          <div className="wrap-rail reveal">
            <ProductRail />
          </div>
          <div className="wrap">
            <a className="link-arrow ig-link" href={site.instagram} target="_blank" rel="noopener">
              See the full collection on Instagram <ArrowIcon className="ic" />
            </a>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="section section-tint" id="delivery">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow reveal">Same-day delivery</p>
                <h2 className="reveal d1">
                  From message to doorstep in <em>under an hour</em>.
                </h2>
              </div>
              <p className="lede reveal d2">No checkout forms and no waiting a week. Here&apos;s how an order comes together.</p>
            </div>
            <ol className="steps">
              <li className="step reveal">
                <span className="step-n">i.</span>
                <h3>Say hello</h3>
                <p>Message us on WhatsApp or send a DM on Instagram. Tell us the occasion, your size and the look you have in mind.</p>
              </li>
              <li className="step reveal d1">
                <span className="step-n">ii.</span>
                <h3>We style it with you</h3>
                <p>We send photos of pieces that fit the brief, answer every question, and help you land on the right one.</p>
              </li>
              <li className="step reveal d2">
                <span className="step-n">iii.</span>
                <h3>It arrives today</h3>
                <p>Your order leaves Surulere the same day and reaches most of Lagos in about 45 minutes.</p>
                <span className="step-time">Approx. 45 minutes</span>
              </li>
            </ol>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow reveal">Kind words</p>
                <h2 className="reveal d1">
                  What our customers <em>say</em>.
                </h2>
              </div>
              <div className="rating-block reveal d2">
                <span className="rating-num">{site.rating}</span>
                <div className="rating-meta">
                  <Stars className="lg" />
                  <br />
                  Average rating on Google
                  <br />
                  from {site.reviewCount} reviews
                </div>
              </div>
            </div>
            <div className="quotes">
              {quotes.map((q, i) => (
                <figure key={q.who} className={`quote reveal d${i}`}>
                  <span className="qmark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote>{q.text}</blockquote>
                  <figcaption className="quote-who">
                    <b>{q.who}</b>
                    <span>Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section className="section section-tint" id="visit">
          <div className="wrap visit-grid">
            <div>
              <p className="eyebrow reveal">Visit the boutique</p>
              <h2 className="reveal d1">
                Come and see us <em>under the arch</em>.
              </h2>
              <dl className="info reveal d2">
                <div className="info-row">
                  <dt>Address</dt>
                  <dd>
                    {site.street}
                    <small>{site.area}</small>
                  </dd>
                  <a className="mini-btn" href={site.directions} target="_blank" rel="noopener">
                    Get directions
                  </a>
                </div>
                <div className="info-row">
                  <dt>Phone</dt>
                  <dd>
                    <a href={site.phoneHref}>{site.phone}</a>
                    <small>Calls and WhatsApp</small>
                  </dd>
                  <CopyPhone phone={site.phone} />
                </div>
                <div className="info-row">
                  <dt>Hours</dt>
                  {/* HOURS: confirm opening hours with the owner and replace this line */}
                  <dd>
                    Open for walk-ins and orders
                    <small>Message ahead and we&apos;ll have your pieces ready</small>
                  </dd>
                  <span />
                </div>
                <div className="info-row">
                  <dt>Instagram</dt>
                  <dd>
                    <a href={site.instagram} target="_blank" rel="noopener">
                      {site.instagramHandle}
                    </a>
                    <small>New arrivals, every week</small>
                  </dd>
                  <span />
                </div>
              </dl>
            </div>

            <div className="visit-card reveal d2">
              <Image src="/images/storefront.jpg" alt="" fill sizes="(max-width: 1020px) 92vw, 50vw" style={{ objectFit: "cover", objectPosition: "40% 30%" }} />
              <div className="visit-card-inner">
                <p className="eyebrow">Can&apos;t make it in?</p>
                <h3>We&apos;ll bring the boutique to you.</h3>
                <p>Tell us what you&apos;re dressing for and where you are in Lagos. We&apos;ll send options, help you choose, and get it to you today.</p>
                <div className="cta-row">
                  <a className="btn btn-light" href={waLink("Hello Santos Collection, I'd like to order for same-day delivery.")} target="_blank" rel="noopener">
                    <WhatsAppIcon className="ic" />
                    Chat on WhatsApp
                  </a>
                  <a className="btn btn-ghost-light" href={site.instagram} target="_blank" rel="noopener">
                    <InstagramIcon className="ic" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <svg className="foot-mark" viewBox="0 0 560 130" role="img" aria-label="Santos Collection">
                <defs>
                  <path id="foot-arc" d="M30 122 A 330 170 0 0 1 530 122" />
                </defs>
                <text fontFamily="var(--font-sans), sans-serif" fontWeight="600" fontSize="38" letterSpacing="8" fill="currentColor" textAnchor="middle">
                  <textPath href="#foot-arc" startOffset="50%">
                    SANTOS COLLECTION
                  </textPath>
                </text>
              </svg>
              <p>A curated women&apos;s fashion boutique in Surulere, Lagos. Occasionwear, everyday classics and gifts — delivered the same day.</p>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="#edit">Occasionwear</a></li>
                <li><a href="#edit">Everyday classics</a></li>
                <li><a href="#edit">Gifting</a></li>
                <li><a href="#new-in">New in</a></li>
              </ul>
            </div>
            <div>
              <h4>Boutique</h4>
              <ul>
                <li><a href="#delivery">Same-day delivery</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#visit">Visit us</a></li>
              </ul>
            </div>
            <div>
              <h4>Talk to us</h4>
              <ul>
                <li><a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
                <li><a href={site.phoneHref}>{site.phone}</a></li>
                <li><a href={site.instagram} target="_blank" rel="noopener">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>
              © {new Date().getFullYear()} Santos Collection. {site.street}, {site.area}.
            </span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
