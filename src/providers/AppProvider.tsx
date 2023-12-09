'use client';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-wrap-balancer';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <NextUIProvider>
      <Provider>{children}</Provider>
    </NextUIProvider>
  );
};

export default AppProvider;
