// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container } from '@material-ui/core';
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
      : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));

// ----------------------------------------------------------------------

export default function LandingNeeded() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item lg={5} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <img src="/static/practice/practice.jpg" alt="NeedImage" sx={{ width: '100%' }} />
            </ContentStyle>
          </Grid>
          <Grid item lg={7} md={12} dir="ltr">
            <Box sx={{ color: 'common.black', fontSize: '50px' }}>When you need our services?</Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.black',
                fontSize: '28px'
              }}
            >
              ✔ When individuals become victims through no fault of their own <br />
              ✔ When the only posture that is acceptable to you is to fight <br />
              ✔ When every possible alternative must be explored <br />
              ✔ When the only way you can sleep soundly at night <br />
              <br />
              Is knowing you are doing everything that can be done make no mistake, you have come to the right place!
              <br />
              <br />
              Michael Rowan <br />
              Attorney at Law <br />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
