/**
 * Business identity for the current client site.
 *
 * This is the single place to change who the site is for: name, tagline,
 * contact details and service area. Section content in `home.ts` (and future
 * `services.ts` / `locations.ts`) can reference these values so the same fact
 * is never typed twice.
 *
 * The sample below describes a fictional local service business so the
 * approved sections have realistic content to render. Replace it with the real
 * client's details.
 */

export interface SiteData {
  /** Business name, shown wherever the brand is named. */
  name: string;
  /** One-line description of what the business does. */
  tagline: string;
  /** Primary phone number, formatted for display. */
  phone: string;
  /** Contact email address. */
  email: string;
  /** The city and region the business is based in / serves. */
  serviceArea: string;
  /** Key links used across sections. */
  links: {
    /** Where "get a quote" / "contact us" buttons point. */
    contact: string;
    /** Where "our services" buttons point. */
    services: string;
    /** Where "about us" buttons point. */
    about: string;
  };
}

const site: SiteData = {
  name: 'Northline Plumbing & Heating',
  tagline: 'Reliable plumbing, heating and boiler care for homes across the region.',
  phone: '(555) 018-4420',
  email: 'hello@northlineplumbing.example',
  serviceArea: 'Greater Fairview',
  links: {
    contact: '/contact',
    services: '/services',
    about: '/about',
  },
};

export default site;
