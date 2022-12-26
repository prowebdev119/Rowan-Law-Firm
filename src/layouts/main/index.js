import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Outlet } from 'react-router-dom';
// material
import { Box, Link, Container, Typography } from '@material-ui/core';
// components
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default'
          }}
        >
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <ScrollLink to="move_top" spy smooth>
              <Box sx={{ maxWidth: '200px', margin: '0 auto' }}>
                <img src="/static/brand/whiteBack.png" alt="WhiteBack" sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
              </Box>
            </ScrollLink>

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="/">Michael.</Link>
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
