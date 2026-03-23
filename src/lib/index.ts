/**
 * Route constants for the application
 */
export const ROUTE_PATHS = {
  HOME: '/',
} as const;

/**
 * Workshop Category Types based on business services
 */
export type WorkshopCategory = 
  | 'Private Paint Events'
  | 'Sip & Paint'
  | 'Customized Paintings'
  | 'Artsy Date';

/**
 * Main Workshop interface representing an art event
 */
export interface Workshop {
  id: string;
  title: string;
  category: WorkshopCategory;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  date: string;
  time?: string;
  location: string;
  price: number;
  attendeesCount: number;
  maxCapacity: number;
  isUpcoming: boolean;
  tags?: string[];
}

/**
 * User interface for community members and hosts
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  role: 'member' | 'artist' | 'admin';
  joinedAt: string;
}

/**
 * Definition of the main workshop service types
 */
export const WORKSHOP_TYPES = [
  {
    id: 'private-paint',
    name: 'Private Paint Events' as WorkshopCategory,
    description: 'Exclusive and intimate painting sessions tailored for your inner circle, birthdays, or special celebrations.',
    cta: 'Book Private Session',
    features: ['Custom Themes', 'Mobile Studio', 'All Supplies Included']
  },
  {
    id: 'sip-paint',
    name: 'Sip & Paint' as WorkshopCategory,
    description: 'The perfect blend of creative expression and social relaxation. Unwind with a glass of wine and a canvas.',
    cta: 'Join a Sip & Paint',
    features: ['Guided Instruction', 'Social Atmosphere', 'Beverage Included']
  },
  {
    id: 'customized-paintings',
    name: 'Customized Paintings' as WorkshopCategory,
    description: 'Commissioned artworks designed specifically for your space. We bring your unique artistic vision to life.',
    cta: 'Request Commission',
    features: ['Professional Artists', 'Personal Consultations', 'Premium Materials']
  },
  {
    id: 'artsy-date',
    name: 'Artsy Date' as WorkshopCategory,
    description: 'A romantic and unique date night experience where you and your partner create a shared masterpiece.',
    cta: 'Reserve Date Night',
    features: ['Couple Harmony Canvas', 'Candlelit Setting', 'Keepsake Photo']
  }
] as const;

/**
 * Painting categories offered by Comely Arts
 */
export const PAINTING_CATEGORIES = [
  'Canvas Painting',
  'Tote Bag Painting',
  'Jeans Painting',
  'Sneaker Paintings',
  'Tee Painting',
  'Mural Wall Painting',
] as const;

/**
 * Community engagement constants
 */
export const COMMUNITY_CONSTANTS = {
  MEMBER_COUNT: '500+',
  WORKSHOPS_COMPLETED: '50+',
  CLIENTS_COUNT: '10+',
  FOUNDED_YEAR: 2026,
  CURRENT_YEAR: 2026,
  CONTACT_EMAIL: 'comelyartsbyyou@gmail.com',
  /** WhatsApp link: use full number with country code, no + or spaces (e.g. 919876543210) */
  WHATSAPP_LINK: 'https://wa.me/916380165810',
  /** Event inquiry: email sent to this address when someone requests a callback (via EVENT_INQUIRY_SUBMIT_URL). */
  EVENT_INQUIRY_EMAIL: 'comelyartsbyyou@gmail.com',
} as const;

/**
 * URL that receives event-inquiry form submissions and sends an email to Comely Arts.
 * Set to your Google Apps Script Web App URL (see event-inquiry-email.gs in project root),
 * or a Formspree form URL (https://formspree.io) so Comely Arts gets the inquiry by email.
 * When someone clicks "Request a callback", we POST JSON { name, contact, email, date, eventType } here.
 */
export const EVENT_INQUIRY_SUBMIT_URL = 'https://formspree.io/f/xqeyvdal';

/**
 * Helper for smooth scrolling to anchor links
 */
export const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Account for fixed header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Formats currency values consistently across the site
 */
export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
};