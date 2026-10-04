import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fozil Inogomov (DFZ) — Full-Stack Developer & AI Systems Builder',
  description:
    'Portfolio of Fozil Inogomov (DFZ) - Full-Stack Developer specializing in Next.js, React 19, TypeScript, Google Gemini AI, PostgreSQL, Socket.IO, and scalable digital products.',
  keywords: [
    'Fozil Inogomov',
    'DFZ',
    'Full-Stack Developer',
    'Next.js Developer',
    'TypeScript',
    'Gemini AI',
    'Uzbekistan Developer',
    'Web Developer Portfolio',
    'ClassOS',
    'WordFlow',
    'UzbJobs',
  ],
  authors: [{ name: 'Fozil Inogomov', url: 'https://github.com/inogomovfozil01-sys' }],
  creator: 'Fozil Inogomov (DFZ)',
  metadataBase: new URL('https://partfoliyo-dfz.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
    url: 'https://partfoliyo-dfz.vercel.app',
    title: 'Fozil Inogomov (DFZ) — Full-Stack Developer',
    description:
      'Building modern digital products, scalable full-stack applications and intelligent systems.',
    siteName: 'DFZ Portfolio',
    images: [
      {
        url: '/avatar.png',
        width: 512,
        height: 512,
        alt: 'Fozil Inogomov - DFZ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fozil Inogomov (DFZ) — Full-Stack Developer',
    description:
      'Building modern digital products, scalable full-stack applications and intelligent systems.',
    images: ['/avatar.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/avatar.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#08090D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
