import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centimo - Student Financial Freedom Made Simple',
  description: 'Track wallets, split budgets, monitor subscriptions, BNPL plans, and build savings. The ultimate personal finance app designed specifically for students.',
  icons: {
    icon: '/icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

