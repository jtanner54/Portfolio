import type { Metadata, Viewport } from 'next';
import '@/src/styles/globals.css';
import { geistSans } from '@/src/styles/fonts';
import NavBar from '@/src/Components/NavBar';
import Footer from '@/src/Components/Footer';

export const metadata: Metadata = {
  title: 'Jack Tanner | Portfolio',
  description: 'Jack Tanner\'s Portfolio Website',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  colorScheme: "dark",
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
