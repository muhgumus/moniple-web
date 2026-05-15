import { initializePaddle, type Paddle } from '@paddle/paddle-js';

let paddleInstance: Paddle | null = null;

export async function getPaddle(): Promise<Paddle> {
  if (paddleInstance) return paddleInstance;
  const paddle = await initializePaddle({
    environment: 'production',
    token: 'live_a0b08fd7c556d6ae988b4c22cd2',
  });
  if (!paddle) throw new Error('Paddle failed to initialize');
  paddleInstance = paddle;
  return paddle;
}

// TODO: Replace these with real price IDs from Paddle dashboard after creating prices
export const PADDLE_PRICES = {
  monthly: 'pri_REPLACE_WITH_MONTHLY_PRICE_ID',
  yearly: 'pri_REPLACE_WITH_YEARLY_PRICE_ID',
};

export async function openCheckout(plan: 'monthly' | 'yearly', customerEmail?: string) {
  const paddle = await getPaddle();
  paddle.Checkout.open({
    items: [{ priceId: PADDLE_PRICES[plan], quantity: 1 }],
    customer: customerEmail ? { email: customerEmail } : undefined,
    settings: {
      displayMode: 'overlay',
      theme: 'dark',
      successUrl: 'https://moniple.com/checkout/success',
    },
  });
}
