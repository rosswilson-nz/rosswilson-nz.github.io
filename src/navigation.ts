import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Research',
      href: getPermalink('/research'),
    },
    {
      text: 'Teaching',
      href: getPermalink('/teaching'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Github', text: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/rosswilson-nz' },
    {
      ariaLabel: 'Google Scholar',
      text: 'Google Scholar',
      icon: 'tabler:brand-google-filled',
      href: 'https://scholar.google.co.nz/citations?user=PnU5IYEAAAAJ&hl=en',
    },
    { ariaLabel: 'Researchgate', text: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ross_Wilson2' },
  ],
};
