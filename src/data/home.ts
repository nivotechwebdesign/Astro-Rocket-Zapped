/**
 * Homepage content for the current client site.
 *
 * One entry per approved section variant. The words and links here are passed
 * into the section components in `src/components/site-sections/`; the design
 * stays in those components. Edit this file to change what the homepage says —
 * not the section components.
 */

import type { HomeContent } from './types';
import site from './site';

const home: HomeContent = {
  hero: {
    badge: 'Licensed & insured',
    titleLines: ['Plumbing and heating you can count on.'],
    description:
      'From dripping taps to full boiler installs, our local engineers turn up on time, tidy up after themselves and get the job done right the first time.',
    descriptionMobile: 'Local engineers for plumbing, heating and boilers — on time, tidy, done right.',
    actions: [
      { label: 'Get a free quote', href: site.links.contact },
      { label: 'See our services', href: site.links.services, icon: 'wrench' },
    ],
  },

  services: {
    badge: { icon: 'sparkles', label: 'What we do' },
    heading: 'Services for every home',
    lead: 'One trusted team for the plumbing and heating jobs that keep your home running.',
    items: [
      {
        icon: 'droplet',
        title: 'Plumbing repairs',
        description: 'Leaks, blockages, taps and toilets fixed fast, with no mess left behind.',
        href: site.links.services,
      },
      {
        icon: 'flame',
        title: 'Heating & boilers',
        description: 'Boiler installs, servicing and repairs to keep your home warm all winter.',
        href: site.links.services,
      },
      {
        icon: 'shower-head',
        title: 'Bathroom fitting',
        description: 'Full bathroom and shower installations, finished to a standard you will love.',
        href: site.links.services,
      },
    ],
  },

  about: {
    badge: { icon: 'user', label: 'About us' },
    headingLine1: 'A local team',
    headingLine2: 'you can trust.',
    paragraphs: [
      `We have kept homes across ${site.serviceArea} warm and running for over fifteen years. Every job is handled by our own qualified engineers — never a subcontractor you have never met.`,
      'We give honest, upfront pricing and treat your home like our own. That is why so much of our work comes from neighbours recommending us to neighbours.',
    ],
    cta: { label: 'More about us', href: site.links.about },
    statsIntro: 'Why homeowners choose us',
    stats: [
      { icon: 'history', label: '15+ years serving the area' },
      { icon: 'users', label: '3,000+ jobs completed' },
      { icon: 'shield-check', label: 'Fully licensed & insured' },
      { icon: 'map-pin', label: site.serviceArea },
    ],
  },

  reviews: {
    badge: { icon: 'quote', label: 'Reviews' },
    heading: 'What our customers say',
    lead: 'Real feedback from homeowners across the area.',
    items: [
      {
        quote:
          'They fixed our boiler the same day I called, right before a cold snap. Friendly, fast and fairly priced — I would not use anyone else.',
        name: 'Sarah Whitfield',
        role: 'Homeowner, Fairview',
      },
      {
        quote:
          'Fitted our new bathroom start to finish and left it spotless every evening. The finish is better than we imagined.',
        name: 'Daniel Okafor',
        role: 'Homeowner, Ashgrove',
      },
      {
        quote:
          'Turned up exactly when they said, explained the problem in plain English and did not try to upsell me. Genuinely honest tradespeople.',
        name: 'Marie Laurent',
        role: 'Homeowner, Riverside',
      },
      {
        quote:
          'Annual boiler service done in under an hour with zero fuss. Booking was easy and the engineer was lovely.',
        name: 'Tom Bradley',
        role: 'Homeowner, Northgate',
      },
    ],
  },

  cta: {
    badge: { icon: 'message-circle', label: 'Get in touch' },
    heading: 'Need a plumber or heating engineer?',
    description: 'Tell us what is wrong and we will give you a straight answer and a fair quote — no call-out surprises.',
    primary: { label: 'Get a free quote', href: site.links.contact },
    secondary: { label: 'Learn more about us', href: site.links.about },
  },
};

export default home;
