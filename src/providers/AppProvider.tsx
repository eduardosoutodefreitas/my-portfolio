'use client';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-wrap-balancer';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <NextUIProvider>
      <Provider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '10px',
            },
          }}
        />
        {children}
      </Provider>
    </NextUIProvider>
  );
};

export default AppProvider;
