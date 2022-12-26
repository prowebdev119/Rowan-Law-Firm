import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Box, Link, Divider, Container, Typography, IconButton, Stack } from '@material-ui/core';
//
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill }
];

const LINKS = [
  {
    headline: 'RowanLawFirm',
    children: [
      { name: 'About us', href: '/about-us' },
      { name: 'Contact us', href: '/contact-us' },
      { name: 'Practice areas', href: 'practice-areas' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: 'Rowan Law Firm', href: '#' },
      { name: '4525 Harding Place', href: '#' },
      { name: 'Nashville, TN and Tampa FL', href: '#' },
      { name: 'Phone Number: 615-243-2626', href: '#' },
      { name: 'Fax Number: 615-469-2527', href: '#' },
      { name: 'Email: Mrowan@rowanwins.com', href: '#' },
      { name: 'www.rowanwins.com ', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Box sx={{ maxWidth: '200px' }}>
                <img src="/static/brand/whiteBack.png" alt="WhiteBack" sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
              </Box>
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="common.black" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
