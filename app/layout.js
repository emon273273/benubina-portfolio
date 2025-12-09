import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://benubina.com'),
  title: {
    default: "Benubina - Software Development Agency | Custom Solutions",
    template: "%s | Benubina"
  },
  description: "Leading software development agency specializing in web development, mobile apps, and custom software solutions. Transform your business with innovative technology.",
  keywords: ["software development", "web development", "mobile apps", "custom software", "software agency", "technology solutions"],
  authors: [{ name: "Benubina" }],
  creator: "Benubina",
  publisher: "Benubina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benubina.com",
    title: "Benubina - Software Development Agency",
    description: "Leading software development agency specializing in web development, mobile apps, and custom software solutions.",
    siteName: "Benubina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benubina - Software Development Agency",
    description: "Leading software development agency specializing in web development, mobile apps, and custom software solutions.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

