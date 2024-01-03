import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProvider from '@/providers/AppProvider';
import Header from './components/header';
import DynamicNav from './components/DynamicNav/DynamicNav';

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
    <html lang="en" className="scroll-smooth">
      <body className={`text-primaryBlack ${inter.className}`}>
        <AppProvider>
          <Header />
          {children}
          <DynamicNav />
        </AppProvider>
      </body>
    </html>
  );
}
