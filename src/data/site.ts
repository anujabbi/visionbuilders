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
// The Kutumb and NIPUN share links below work as links but should be swapped
// for the full page address: open each link in a browser and copy the URL.
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
    link: 'https://www.facebook.com/share/1AyW8bPd7Z/',
    plugin: 'https://www.facebook.com/share/1AyW8bPd7Z/', // TODO: replace with full page URL
  },
  {
    key: 'nipun',
    name: 'NIPUN',
    link: 'https://www.facebook.com/share/18YWfixCdv/',
    plugin: 'https://www.facebook.com/share/18YWfixCdv/', // TODO: replace with full page URL
  },
];

export const PARTNER_SITES = {
  kutumb: 'https://kutumbfamily.org/',
  nipun: 'https://www.nipun.org/',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/kutumb/', label: 'Kutumb' },
  { href: '/nipun/', label: 'NIPUN' },
  { href: '/newsletter/', label: 'Newsletter' },
];
