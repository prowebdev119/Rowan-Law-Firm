import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography, Stack } from '@material-ui/core';
// routes
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  fontSize: '60px',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('xl')]: {
    margin: 'auto',
    fontSize: '72px'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 8,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  left: 0,
  bottom: 0,
  zIndex: 9,
  width: '30%',
  maxWidth: '350px',
  margin: 'auto',
  position: 'absolute',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up('xl')]: {
    left: '3%',
    bottom: '0',
    maxWidth: '500px'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroImgStyle alt="hero" src="/static/home/michael.png" variants={varFadeInUp} />
        <HeroOverlayStyle alt="overlay" src="/static/home/home.png" variants={varFadeIn} />

        <Container maxWidth="xl">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="div" sx={{ color: 'common.white', borderTop: 'solid 5px white' }}>
                THE RIGHT LAWYER
                <br />
              </Typography>
              <Typography
                variant="div"
                sx={{ color: 'common.white', borderBottom: 'solid 2px white', fontSize: '30px' }}
              >
                MAKES ALL THE DIFFERENCE
                <br />
              </Typography>
              <Typography variant="div" sx={{ color: 'common.white', fontSize: '20px' }}>
                Michael Rowan has over three decades of experience as a trial lawyer.
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
