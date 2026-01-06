import type { Metadata, Viewport } from 'next';
import '@/src/styles/globals.css';
import { geistSans } from '@/src/styles/fonts';
import NavBar from '@/src/Components/Static/NavBar';
import Footer from '@/src/Components/Static/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Jack Tanner | Full-Stack Developer & Software Engineer',
    template: '%s | Jack Tanner'
  },
  description: 'Jack Tanner is a passionate full-stack developer and software engineer specializing in React, TypeScript, Node.js, and modern web technologies. Explore my portfolio, projects, and technical expertise.',
  keywords: [
    'Jack Tanner',
    'Full-Stack Developer',
    'Software Engineer',
    'React Developer',
    'TypeScript',
    'Node.js',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'Purrquinox',
    'Rose-Hulman',
    'JavaScript',
    'Python',
    'Java',
    'Go',
    'MySQL',
    'PostgreSQL',
    'REST API',
    'Git',
    'GitHub'
  ],
  authors: [{ name: 'Jack Tanner', url: 'https://jacktanner.dev' }],
  creator: 'Jack Tanner',
  publisher: 'Jack Tanner',
  metadataBase: new URL('https://jacktanner.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jacktanner.dev',
    title: 'Jack Tanner | Full-Stack Developer & Software Engineer',
    description: 'Jack Tanner is a passionate full-stack developer and software engineer specializing in React, TypeScript, Node.js, and modern web technologies. Explore my portfolio, projects, and technical expertise.',
    siteName: 'Jack Tanner Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jack Tanner - Full-Stack Developer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Tanner | Full-Stack Developer & Software Engineer',
    description: 'Jack Tanner is a passionate full-stack developer and software engineer specializing in React, TypeScript, Node.js, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@jacktanner',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  colorScheme: "dark",
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jack Tanner",
    "url": "https://jacktanner.dev",
    "jobTitle": "Full-Stack Developer & Software Engineer",
    "description": "Passionate full-stack developer and software engineer specializing in React, TypeScript, Node.js, and modern web technologies.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Rose-Hulman Institute of Technology"
    },
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Java",
      "Go",
      "MySQL",
      "PostgreSQL",
      "REST API",
      "Web Development",
      "Full-Stack Development"
    ],
    "sameAs": [
      "https://github.com/jtanner54"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jack Tanner Portfolio",
    "url": "https://jacktanner.dev",
    "description": "Portfolio website of Jack Tanner, a full-stack developer and software engineer",
    "author": {
      "@type": "Person",
      "name": "Jack Tanner"
    }
  };

  return (
    <html lang='en'>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
