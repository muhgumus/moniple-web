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

// Live Paddle price IDs — created via Paddle API (see CLAUDE.md 2026-05-15 session)
// Pro product:  pro_01krme28yq1cv2aqkkynnk6kk1
// Team product: pro_01krn8sa5yxjrkhy3831mq92hg
export const PADDLE_PRICES = {
  proMonthly: 'pri_01krmf65p4mh6dcmb8js9gz6gv', // $9.90 / seat / month
  proYearly: 'pri_01krn8s9v35d5pndenxwnaz035', // $99 / seat / year (~17% off)
  teamMonthly: 'pri_01krn8spj7prj46w7gzh5cgv7y', // $34.90 / 5-seat block / month
  teamYearly: 'pri_01krn8sptvttjzwfr59m0wm0eh', // $348 / 5-seat block / year
} as const;

export type PaddlePlan = keyof typeof PADDLE_PRICES;

interface OpenCheckoutOptions {
  quantity?: number;
  customerEmail?: string;
}

export async function openCheckout(
  plan: PaddlePlan,
  options?: OpenCheckoutOptions
): Promise<void> {
  const paddle = await getPaddle();
  paddle.Checkout.open({
    items: [{ priceId: PADDLE_PRICES[plan], quantity: options?.quantity ?? 1 }],
    customer: options?.customerEmail ? { email: options.customerEmail } : undefined,
    settings: {
      displayMode: 'overlay',
      theme: 'dark',
      successUrl: 'https://moniple.com/checkout/success',
    },
  });
}
