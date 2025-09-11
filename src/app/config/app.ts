// App configuration
export const APP_CONFIG = {
  // Your actual App Store URL
  appStoreUrl: "https://apps.apple.com/ca/app/homekeep/id6751912377",

  // App details
  name: "HomeKeep",
  description: "Never forget home maintenance again!",

  // Social links (if you have them)
  social: {
    twitter: undefined,
    facebook: undefined,
    instagram: undefined,
  },

  // Contact information
  contact: {
    email: "support@homekeep.app",
    website: "https://homekeep.app",
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
