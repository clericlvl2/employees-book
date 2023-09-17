import { Subscription, SUBSCRIPTION_OPTIONS } from './types.ts';

export const generateId = () => Math.ceil(Math.random() * 1e9);
export const checkSubscriptionValue = (value: string): value is Subscription =>
  Object.values(SUBSCRIPTION_OPTIONS).includes(value as Subscription);
