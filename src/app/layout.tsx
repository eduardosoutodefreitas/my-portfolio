import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProvider from '@/providers/AppProvider';
import BottomNav from './components/BottomNav/BottomNav';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Freitas portfolio',
  description:
    'Front end Developer, React, Typescript, Javascript, Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-primaryBlack ${inter.className}`}>
        <AppProvider>
          <Header />
          {children}
          <BottomNav />
        </AppProvider>
      </body>
    </html>
  );
}
