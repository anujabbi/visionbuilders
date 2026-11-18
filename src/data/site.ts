// Facts that appear across the site.
// Anything an organizer may need to change lives in src/content/*.json,
// which Smita and other editors update through Pages CMS (see .pages.yml).
// This file turns that content into the shapes the pages use.
import settings from '../content/settings.json';
import home from '../content/home.json';
import board from '../content/board.json';
import fundraisers from '../content/fundraisers.json';
import newsletters from '../content/newsletters.json';
import kutumb from '../content/kutumb.json';
import nipun from '../content/nipun.json';

export const ORG = {
  name: 'Vision Builders',
  legalName: 'Vision Builders Inc.',
  tagline: 'Seeing what’s possible. Making it happen.',
  ein: settings.ein,
  email: settings.email,
  zelle: settings.zelle,
  address: [settings.address_line_1, settings.address_line_2],
  paypal: settings.paypal,
};

// Facebook pages. Each must be the page's full facebook.com/<page-name> address
// for the live feed embed to work.
export const FACEBOOK = [
  { key: 'vb', name: 'Vision Builders', link: settings.facebook_vision_builders, plugin: settings.facebook_vision_builders },
  { key: 'kutumb', name: 'Kutumb', link: settings.facebook_kutumb, plugin: settings.facebook_kutumb },
  { key: 'nipun', name: 'NIPUN', link: settings.facebook_nipun, plugin: settings.facebook_nipun },
];

export const PARTNER_SITES = {
  kutumb: settings.kutumb_website,
  nipun: settings.nipun_website,
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/kutumb/', label: 'Kutumb' },
  { href: '/nipun/', label: 'NIPUN' },
  { href: '/newsletter/', label: 'Newsletter' },
  { href: '/fundraisers/', label: 'Fundraisers' },
  { href: '/about/', label: 'About us' },
];

export const HOME = home;
// Combined totals across both partners: [number, label, where it comes from].
export const IMPACT_2026: string[][] = home.impact.map((i) => [i.number, i.label, i.source]);

export const BOARD = board.members;
export const FUNDRAISERS = fundraisers.events;
// Newest year first.
export const NEWSLETTERS = [...newsletters.issues].sort((a, b) => String(b.year).localeCompare(String(a.year)));
export const KUTUMB = kutumb;
export const NIPUN = nipun;
