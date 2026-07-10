/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── TypeScript: build errors must be fixed before shipping ─────────────────
  // ignoreBuildErrors was intentionally removed. All type errors must pass.

  images: {
    unoptimized: true,
  },
  turbopack: {},

  // ── HTTP Security Headers ──────────────────────────────────────────────────
  // Applied to every route. Target grade: A+ on securityheaders.com
  async headers() {
    const isDev = process.env.NODE_ENV === 'development'
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking — disallow rendering in iframes
          { key: 'X-Frame-Options', value: 'DENY' },
          // Stop browsers from guessing MIME types (prevents MIME-sniffing attacks)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Don't leak full referrer URL to third-party sites
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable access to sensitive device APIs
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
          // Force HTTPS for 2 years — only in production to avoid localhost breakage
          ...(isDev
            ? []
            : [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=63072000; includeSubDomains; preload',
                },
              ]),
          // Content Security Policy
          // Scoped to: self + Google Fonts + Vercel Analytics + Gemini API
          {
            key: 'Content-Security-Policy',
            value: [
              `default-src 'self'`,
              // Next.js / Turbopack requires unsafe-eval in dev for callstack reconstruction
              `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://va.vercel-scripts.com`,
              // Styles: self + Google Fonts
              `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
              // Fonts: Google Fonts CDN
              `font-src 'self' https://fonts.gstatic.com`,
              // Images: self + inline data URIs for SVG
              `img-src 'self' data: blob:`,
              // API connections: self + Google AI (Gemini)
              `connect-src 'self' https://generativelanguage.googleapis.com https://va.vercel-scripts.com`,
              // Service worker for PWA
              `worker-src 'self' blob:`,
              // No iframes allowed
              `frame-ancestors 'none'`,
              // Only allow form posts to self
              `form-action 'self'`,
              ...(isDev ? [] : [`upgrade-insecure-requests`]),
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
