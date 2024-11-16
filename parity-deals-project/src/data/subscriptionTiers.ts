export type TierNames = keyof typeof subscriptionTiers;

export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInPounds: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomiseBanner: false,
    canRemoveBranding: false,
    stripePriceId: null,
  },
  Basic: {
    name: "Basic",
    priceInPounds: 1900,
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 10000,
    canAccessAnalytics: true,
    canCustomiseBanner: false,
    canRemoveBranding: true,
  },
  Standard: {
    name: "Standard",
    priceInPounds: 4900,
    maxNumberOfProducts: 30,
    maxNumberOfVisits: 100000,
    canAccessAnalytics: true,
    canCustomiseBanner: true,
    canRemoveBranding: true,
  },
  Premium: {
    name: "Premium",
    priceInPounds: 9900,
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 1000000,
    canAccessAnalytics: true,
    canCustomiseBanner: true,
    canRemoveBranding: true,
  },
} as const;

export const subscriptionTiersInOrder = [
  subscriptionTiers.Free,
  subscriptionTiers.Basic,
  subscriptionTiers.Standard,
  subscriptionTiers.Premium,
] as const;
