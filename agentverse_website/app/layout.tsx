import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AgentVerse | The First AI-Driven MMO Gaming Experience',
  description: 'AgentVerse is a groundbreaking massively multiplayer online platform where players deploy custom AI agents in a persistent, competitive virtual environment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}