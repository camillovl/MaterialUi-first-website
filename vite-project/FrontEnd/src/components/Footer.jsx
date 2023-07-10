import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Box
        className='container'
        sx={{
          height: 'auto',
          bgcolor: '#1A1A19',
          color: 'white',
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            '@media (min-width:600px)': { fontSize: '1rem' },
          }}
        >
          Copyright 2022 Pinus Bar - Todos Os Direitos Reservados
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <InstagramIcon
              sx={{
                fontSize: '60px',
                cursor: 'pointer',
                mx: 1,
                '&:hover': {
                  color: 'goldenrod',
                  transform: 'translateX(5px)',
                  transition: 'all 400ms',
                },
              }}
            />
            <FacebookIcon
              sx={{
                fontSize: '60px',
                cursor: 'pointer',
                mx: 1,
                '&:hover': {
                  color: 'goldenrod',
                  transform: 'translateX(5px)',
                  transition: 'all 400ms',
                },
              }}
            />
            <YouTubeIcon
              sx={{
                fontSize: '60px',
                cursor: 'pointer',
                mx: 1,
                '&:hover': {
                  color: 'goldenrod',
                  transform: 'translateX(5px)',
                  transition: 'all 400ms',
                },
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              '@media (min-width:600px)': { fontSize: '1rem' },marginLeft: '17rem',
            }}
          >
            Feito por Vinicius Camillo
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
