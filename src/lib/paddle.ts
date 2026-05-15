import { initializePaddle, type Paddle } from '@paddle/paddle-js';

const PADDLE_ENV = (process.env.NEXT_PUBLIC_PADDLE_ENV || 'production').toLowerCase();
const isSandbox = PADDLE_ENV === 'sandbox';

const PROD_TOKEN = 'live_a0b08fd7c556d6ae988b4c22cd2';
const SANDBOX_TOKEN = process.env.NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN || '';

const PROD_PRICES = {
  proMonthly: 'pri_01krmf65p4mh6dcmb8js9gz6gv',   // $9.90 / seat / month
  proYearly: 'pri_01krn8s9v35d5pndenxwnaz035',     // $99 / seat / year (~17% off)
  teamMonthly: 'pri_01krn8spj7prj46w7gzh5cgv7y',  // $34.90 / 5-seat block / month
  teamYearly: 'pri_01krn8sptvttjzwfr59m0wm0eh',   // $348 / 5-seat block / year
} as const;

const SANDBOX_PRICES = {
  proMonthly: 'pri_01krnfpm7s294vye5n7mtw6tfn',
  proYearly: 'pri_01krnfpmgmh9mmd2fx3p2xb2zj',
  teamMonthly: 'pri_01krnfpms5st5fc1sxcxqnabps',
  teamYearly: 'pri_01krnfpn22k1bn2m6nm0e7cwpj',
} as const;

// Live products (reference only):
//   Pro product:  pro_01krme28yq1cv2aqkkynnk6kk1
//   Team product: pro_01krn8sa5yxjrkhy3831mq92hg

let paddleInstance: Paddle | null = null;

export async function getPaddle(): Promise<Paddle> {
  if (paddleInstance) return paddleInstance;
  const token = isSandbox ? SANDBOX_TOKEN : PROD_TOKEN;
  if (!token) {
    throw new Error(
      `Paddle ${PADDLE_ENV} token is missing — set NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN`
    );
  }
  const paddle = await initializePaddle({
    environment: isSandbox ? 'sandbox' : 'production',
    token,
    eventCallback: (event) => {
      // Global handler — fires regardless of how checkout was opened (manual
      // Checkout.open() or auto via ?_ptxn=... query param). The per-call
      // `settings.successUrl` is ignored when Paddle auto-opens from URL param,
      // so we navigate manually on the completion event.
      if (event?.name === 'checkout.completed') {
        console.info('Paddle checkout completed — redirecting to app');
        window.location.href = 'https://app.moniple.com/dashboard';
      }
    },
  });
  if (!paddle) throw new Error('Paddle failed to initialize');
  paddleInstance = paddle;
  console.info(`Paddle environment: ${PADDLE_ENV}`);
  return paddle;
}

export const PADDLE_PRICES = isSandbox ? SANDBOX_PRICES : PROD_PRICES;

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
