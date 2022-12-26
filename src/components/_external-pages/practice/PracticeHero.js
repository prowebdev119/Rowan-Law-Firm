import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/about/nashbille.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0
  }
}));

const ContentStyle = styled('div')(() => ({
  paddingTop: '100px',
  fontSize: '50px',
  textAlign: 'center'
}));

// ----------------------------------------------------------------------

export default function PracticeHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Box sx={{ borderTop: 'solid 3px white', borderBottom: 'solid 3px white' }}>
              <Typography
                variant="h2"
                sx={{
                  mt: 5,
                  color: 'common.white',
                  fontWeight: 'fontWeightMedium'
                }}
              >
                Practice Areas
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mt: 5,
                  color: 'common.white',
                  fontWeight: 'fontWeightMedium'
                }}
              >
                Michael H. Rowan, Attorney at Law.
              </Typography>
            </Box>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
