"use client";

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const yarigaLogo = '/yariga.svg';

interface CredentialResponse {
  credential: string;
  select_by: string;
}

export default function LoginPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google || !divRef.current) return;

    try {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
        ux_mode: 'popup',
        callback: (res: CredentialResponse) => {
          if (res.credential) {
            console.log('Google JWT Token:', res.credential);

            router.push('/home');
          }
        },
      });

      window.google.accounts.id.renderButton(divRef.current, {
        theme: 'filled_blue',
        size: 'large',
        type: 'standard',
      });
    } catch (err) {
      console.error('Google auth error:', err);
    }
  }, []);

  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      bgcolor="#f5f5f5"
    >
      <Box display="flex" alignItems="center" mb={3}>
        <Image src={yarigaLogo} alt="Yariga Logo" width={100} height={100} />
      </Box>
      <Box ref={divRef} />
    </Box>
  );
}
