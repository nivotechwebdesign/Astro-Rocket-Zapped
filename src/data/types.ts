/**
 * Content contracts for the approved site-section variants.
 *
 * The design lives in the section components under
 * `src/components/site-sections/`. Client-specific words and links live in the
 * typed data files in this folder (`site.ts`, `home.ts`, …) and are passed into
 * those components as props. These interfaces are the boundary between the two:
 * a section renders whatever content matches its contract, and a client page
 * supplies content that satisfies it.
 */

/** A single call-to-action button or link. */
export interface CtaLink {
  /** Visible button text. */
  label: string;
  /** Destination URL (internal path or absolute URL). */
  href: string;
  /** Optional leading icon name (any icon available to the theme's `<Icon>`). */
  icon?: string;
  /** Optional trailing icon name. Defaults to an arrow on primary actions. */
  trailingIcon?: string;
  /** Open in a new browser tab (adds the safe `rel` automatically). */
  external?: boolean;
}

/** The small pill shown above a section heading. */
export interface SectionBadge {
  /** Icon name shown before the label. */
  icon: string;
  /** Badge text. */
  label: string;
}

/** Hero01 — the top-of-page banner. */
export interface HeroContent {
  badge: string;
  /** Heading lines, rendered one per line. Two or three lines read best. */
  titleLines: string[];
  /** Full description, shown from the small breakpoint up. */
  description: string;
  /** Shorter description shown on phones. Falls back to `description`. */
  descriptionMobile?: string;
  /** Buttons. The first is the primary (solid) action; the rest are outlined. */
  actions: CtaLink[];
}

/** A single service / offering card. */
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  /** Optional link; when set the whole card becomes clickable. */
  href?: string;
}

/** Services01 — a grid of what the business offers. */
export interface ServicesContent {
  badge: SectionBadge;
  heading: string;
  lead: string;
  items: ServiceItem[];
}

/** A single fact/figure tile in the About stats card. */
export interface StatItem {
  icon: string;
  label: string;
  /** Optional link; when set the tile becomes clickable. */
  href?: string;
}

/** About01 — a short introduction with a stats card. */
export interface AboutContent {
  badge: SectionBadge;
  headingLine1: string;
  headingLine2: string;
  /** One or more introduction paragraphs. */
  paragraphs: string[];
  cta: CtaLink;
  /** Small label above the stats grid. */
  statsIntro: string;
  stats: StatItem[];
}

/** A single customer review. */
export interface Review {
  quote: string;
  name: string;
  role: string;
}

/** Reviews01 — a grid of customer testimonials. */
export interface ReviewsContent {
  badge: SectionBadge;
  heading: string;
  lead: string;
  items: Review[];
}

/** CTA01 — the closing call to action. */
export interface CtaContent {
  badge: SectionBadge;
  heading: string;
  description: string;
  /** Primary (solid) action. */
  primary: CtaLink;
  /** Secondary (outlined) action. */
  secondary: CtaLink;
}

/** The content for a single client homepage, one entry per approved section. */
export interface HomeContent {
  hero: HeroContent;
  services: ServicesContent;
  about: AboutContent;
  reviews: ReviewsContent;
  cta: CtaContent;
}
