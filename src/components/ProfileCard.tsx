import React from 'react'
import { Card, CardContent, Button, Box, Stack, Typography } from '@mui/material';
import { LocationOn, Phone, Email, CameraAlt } from '@mui/icons-material';
import Image from 'next/image';

interface Profile {
    id: number;
    name: string;
    role: string;
    address: string;
    phone: string;
    email: string;
    photo: string;
  }

function ProfileCard(prop:Profile) {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D" mb={2}>
        Profile
      </Typography>

      <Card sx={{ borderRadius: '15px', boxShadow: '0px 4px 12px rgba(0,0,0,0.05)' }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
            }}
          >
            {/* Left Section: Background + Profile Image */}
            <Box sx={{ width: { xs: '100%', md: '340px' }, position: 'relative' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  borderTopLeftRadius: '10px', 
                  borderBottomLeftRadius: '10px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={prop.photo}
                  alt="Background"
                  width={340}
                  height={128}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Box>

              {/* Profile Image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-6px',
                  
                  right: '-17%',
                  transform: 'translateX(-50%)',
                }}
              >
                <Image
                  src={prop.photo}
                  alt="Profile"
                  width={78}
                  height={58}
                  className="rounded-full border-0 border-white shadow-md"
                />
              </Box>

              {/* Change Photo Button */}
              <Box sx={{
        position: 'absolute',
        bottom: '16px', 
        left: '16px',}}>
                <Button
        variant="outlined"
        size="small"
        startIcon={<CameraAlt />}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          backgroundColor: 'white',
          borderColor: 'gray.300',
          borderRadius: '8px',
          padding: '4px 12px',
          color: 'gray.700',
          '&:hover': {
            backgroundColor: 'gray.100',
          },
        }}
      >
                  Change Photo
                </Button>
              </Box>
            </Box>

            {/* Right Section: Profile Info */}
            <Box flex={1} mt={{ xs: '50px', md: '0px' }}>
              <Stack direction="column" spacing={3}>
                <Box>
                  <Typography fontSize={22} fontWeight={600} color="#11142D">
                    {prop.name}
                  </Typography>
                  <Typography fontSize={16} color="#808191">
                    {prop.role}
                  </Typography>
                </Box>

                <Box>
                  <Typography fontSize={14} fontWeight={500} color="#808191" mb={0.5}>
                    Address
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOn sx={{ color: '#11142D' }} />
                    <Typography fontSize={14} color="#11142D">
                      {prop.address}
                    </Typography>
                  </Stack>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                  <Box>
                    <Typography fontSize={14} fontWeight={500} color="#808191" mb={0.5}>
                      Phone Number
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Phone sx={{ color: '#11142D' }} />
                      <Typography fontSize={14} color="#11142D" noWrap>
                        {prop.phone}
                      </Typography>
                    </Stack>
                  </Box>

                  <Box>
                    <Typography fontSize={14} fontWeight={500} color="#808191" mb={0.5}>
                      Email
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Email sx={{ color: '#11142D' }} />
                      <Typography fontSize={14} color="#11142D">
                        {prop.email}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ProfileCard