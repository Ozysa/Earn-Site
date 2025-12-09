export const mockUser = {
  name: 'Alex Doe',
  email: 'alex@example.com',
  balance: 42.75,
  pending: 18.5,
  referrals: 12,
  referralEarnings: 24.1
};

export const mockAds = [
  {
    id: 1,
    title: 'Eco Bottle',
    payout: 0.25,
    minViewTime: 20,
    remainingBudget: 120,
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&q=80'
  },
  {
    id: 2,
    title: 'Travel Card',
    payout: 0.35,
    minViewTime: 25,
    remainingBudget: 80,
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400&q=80'
  }
];

export const mockOffers = [
  { id: 1, provider: 'AdGate', title: 'Install & open app', payout: 1.2 },
  { id: 2, provider: 'OfferToro', title: 'Survey 5 minutes', payout: 0.6 }
];

export const mockWithdrawals = [
  { id: 1, amount: 15, status: 'requested', method: 'PayPal', createdAt: '2025-12-01' },
  { id: 2, amount: 20, status: 'paid', method: 'Bank', createdAt: '2025-11-20' }
];

export const mockUsersAdmin = [
  { id: 1, name: 'Alex Doe', email: 'alex@example.com', role: 'user', isVerified: true },
  { id: 2, name: 'Sam Admin', email: 'admin@example.com', role: 'admin', isVerified: true }
];

