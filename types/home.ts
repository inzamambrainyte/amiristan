export interface ConfigContent {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  favicon: string;
  siteUrl: string;
  locale: string;
  contactEmail: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationContent {
  brandName: string;
  logoPath: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaLink: string;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  layout?: "vertical" | "horizontal";
}

export interface SectionContent {
  title: string;
  subtitle: string;
  items: CardItem[];
}

export interface AboutContent {
  badge: string;
  title: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContent {
  badge: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface HeroContent {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: HeroContent;
  features: SectionContent;
  benefits: SectionContent;
  about: AboutContent;
  faq: FAQContent;
}

export interface ContactFormConfig {
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  subjectLabel?: string;
  subjectPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitButton?: string;
  submittingButton?: string;
  successMessage?: string;
  errorMessage?: string;
}

export interface ContactContent {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  form?: ContactFormConfig;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
}

export interface FooterContent {
  brandName: string;
  logoPath: string;
  copyright: string;
  links: NavLink[];
  socials: SocialLinks;
}

export interface LegalBlock {
  type: string;
  text?: string;
  items?: string[];
}

export interface LegalContent {
  title: string;
  blocks: LegalBlock[];
}

export interface ProductPreviewData {
  type?: string;
  badge?: string;
  engine?: string;
  query: string;
  resultTitle: string;
  resultBullets: string[];
  followUp: string;
  footerLeft: string;
  footerRight: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category?: string;
  shortDescription?: string;
  description: string;
  iconName?: string;
  highlights: string[];
  tools?: string;
  preview?: ProductPreviewData;
  ctaText: string;
  ctaLink?: string;
}

export interface ProductFlagship extends ProductItem {
  badge?: string;
  tagline?: string;
}

export interface ProductContent {
  badge?: string;
  title: string;
  subtitle: string;
  items?: ProductItem[];
  flagship?: ProductFlagship;
}

export interface AppData {
  config: ConfigContent;
  Navigation: NavigationContent;
  Home: HomeContent;
  Product: ProductContent;
  Contact: ContactContent;
  Footer: FooterContent;
  Privacy: LegalContent;
  Terms: LegalContent;
}
