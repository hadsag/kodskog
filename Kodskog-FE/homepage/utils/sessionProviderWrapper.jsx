'use client';
import React from 'react'

import { SessionProvider } from 'next-auth/react';

const sessionProviderWrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default sessionProviderWrapper