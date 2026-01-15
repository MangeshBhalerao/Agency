// Import Google Fonts - Inter for body text, Montserrat for headings
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "./fonts.css";

// Configure Inter font with Latin subset
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configure Montserrat font for elegant headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

// Metadata for SEO and browser display
export const metadata = {
  title: "AGENCY - Your Digital Future Starts Here",
  description: "Innovative development agency specializing in creating extraordinary digital experiences that push the boundaries of innovation.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

// Root layout component - Wraps entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      {/* Apply font variables and basic styling */}
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
