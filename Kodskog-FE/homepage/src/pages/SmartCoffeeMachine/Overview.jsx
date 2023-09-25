import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Inter } from 'next/font/google';

import LoginPage from '../../components/login';
import RootLayout from '../../app/layout';

const inter = Inter({ subsets: ['latin'] });

const SmartCoffeeContent = () => {
  return (
    <div id="projects" className="w-full flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-screen">
        <iframe
          src="/assets/projects/SmartCoffeeBlog.html"
          className="w-full h-full mx-auto my-auto"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            maxWidth: '80vw',
            border: 'none',
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
};

const SmartCoffee = ({ Component, pageProps }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== 'loading' && session && session?.error === 'RefreshAccessTokenError') {
      signOut({ callbackUrl: '/' });
    }
  }, [session, status]);

  return (
    status == "loading" ? (
      <RootLayout>
        <LoginPage />
      </RootLayout>
    ) : session ? (
      <RootLayout>
        <SmartCoffeeContent />
      </RootLayout>
    ) : (
      <RootLayout>
        <LoginPage />
      </RootLayout>
    )
  );
};

import { SessionProvider } from 'next-auth/react';

export default function SmartCoffeeMachineOverview() {
  return (
    <SessionProvider>
      <SmartCoffee />
    </SessionProvider>
  );
}

