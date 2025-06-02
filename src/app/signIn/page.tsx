import React from 'react'
import { Box, Button } from '@mui/material';
import Image from 'next/image';

function page() {
  return (
     <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      bgcolor="#f5f5f5"
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Image src="/yariga.svg" alt='Yariga Logo' width={100} height={100} />
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '1px solid #ddd',
          textTransform: 'none',
          padding: '6px 12px',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            boxShadow: 'none',
          },
        }}
        startIcon={
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
        }
      >
        Sign in with Google
      </Button>

    </Box>
  )
}

export default page

