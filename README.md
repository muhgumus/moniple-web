# moniple-web

Next.js 14 static marketing site for Moniple.

## Switching Paddle environment

`NEXT_PUBLIC_PADDLE_ENV` is baked into the JS bundle at build time (static export).
Changing environments requires a **rebuild and redeploy** — there is no runtime switch.

### To sandbox:

```bash
SANDBOX_TOKEN="test_xxx"   # your Paddle sandbox client-side token

# Local build
NEXT_PUBLIC_PADDLE_ENV=sandbox \
NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN="$SANDBOX_TOKEN" \
  npm run build

# Docker build + push
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --build-arg NEXT_PUBLIC_PADDLE_ENV=sandbox \
  --build-arg NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN="$SANDBOX_TOKEN" \
  -t nairotech/moniple-web:main \
  --push .
```

DevTools Console will log `Paddle environment: sandbox`.
Checkout overlay will use `sandbox-checkout.paddle.com`.
Test card: `4242 4242 4242 4242`.

### To production:

```bash
# Local build (production token is hardcoded in src/lib/paddle.ts)
npm run build

# Docker build + push
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --build-arg NEXT_PUBLIC_PADDLE_ENV=production \
  -t nairotech/moniple-web:main \
  --push .
```

Checkout overlay will use `buy.paddle.com`.

### Environment variables

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_PADDLE_ENV` | `production` | `sandbox` or `production` |
| `NEXT_PUBLIC_PADDLE_SANDBOX_TOKEN` | `` | Paddle sandbox client-side token (required when env=sandbox) |
