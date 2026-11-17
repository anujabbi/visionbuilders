// One place for the facts that appear across the site.
// Change them here and every page updates.

export const ORG = {
  name: 'Vision Builders',
  legalName: 'Vision Builders Inc.',
  tagline: 'Seeing what’s possible. Making it happen.',
  ein: '20-0134991',
  email: 'info@visionbuilders.org',
  zelle: 'donate@visionbuilders.org',
  address: ['35 Lomasney Way, Apt 4003', 'Boston, MA 02114'],
  city: 'Boston, Massachusetts',
  paypal: 'https://www.paypal.com/donate/?hosted_button_id=PZTDJUKH2YJEJ',
};

// Facebook pages.
// `link` is used for "Follow us" links. `plugin` must be the page's full
// facebook.com/<page-name> address for the live feed embed to work.
export const FACEBOOK = [
  {
    key: 'vb',
    name: 'Vision Builders',
    link: 'https://www.facebook.com/visionbuilders.nonprofit/',
    plugin: 'https://www.facebook.com/visionbuilders.nonprofit/',
  },
  {
    key: 'kutumb',
    name: 'Kutumb',
    link: 'https://www.facebook.com/kutumbfamily',
    plugin: 'https://www.facebook.com/kutumbfamily',
  },
  {
    key: 'nipun',
    name: 'NIPUN',
    link: 'https://www.facebook.com/NIPUN.NGO',
    plugin: 'https://www.facebook.com/NIPUN.NGO',
  },
];

export const PARTNER_SITES = {
  kutumb: 'https://kutumbfamily.org/',
  nipun: 'https://www.nipun.org/',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'Who we are' },
  { href: '/kutumb/', label: 'Kutumb' },
  { href: '/nipun/', label: 'NIPUN' },
  { href: '/newsletter/', label: 'Newsletter' },
  { href: '/fundraisers/', label: 'Fundraisers' },
];

// Combined across both partners. Each note shows where the total comes from.
export const IMPACT_2026: string[][] = [
  ['638', 'children in preschool, school or college with our support', 'Kutumb 211, NIPUN 427'],
  ['1,377', 'women and young people trained for work', 'Kutumb 716, NIPUN 661'],
  ['471', 'trainees now earning a living', 'NIPUN 454, Kutumb 17'],
  ['8,298', 'patients given free medical care', 'Clinic on Wheels 3,820, other Kutumb clinics 4,478'],
  ['402', 'children given a hot meal every day', 'NIPUN'],
  ['128', 'children moved into government schools', 'NIPUN'],
];
