// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, varFadeInRight, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function PracticeContent() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={12} lg={5}>
            <MotionInView variants={varFadeInUp}>
              <Box component="img" src="/static/practice/practice.jpg" sx={{ borderRadius: 2 }} />
            </MotionInView>
          </Grid>
          <Grid item sm={12} lg={7}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Practice Areas
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h4">Civil</Typography>
              <br />
              <Typography variant="h5">
                Wrongful Death or Catastrophic Injury Litigation (Contingency Fee Contract), Whistleblower Cases &
                Qui-Tam Actions (Contingency Fee Contract), Personal Injury & Workers Comp Injury (Contingency Fee
                Contract), Professional Malpractice (Contingency Fee Contract), and Business Law Litigation (Primarily
                Contingency Fee Contract).
              </Typography>
              <br />
              <Typography variant="h4"> Criminal</Typography>
              <br />
              <Typography variant="h5">
                Business Criminal (Hourly Fee Contract), Criminal Cases (Hourly Fee Contract), and D.U.I. (Flat Fee
                Contract).
              </Typography>
              <br />
              <Typography variant="h4">Note</Typography>
              <br />
              <Typography variant="h5">
                The Rowan Law Firm assist Immigration Clients in seeking Asylum into the United States, obtain their
                United States Residence, and obtaining their United State Citizenship. The Rowan Law firm recognize and
                believe 99.9% of all Immigrants around the world trying to move to the United States are looking for
                freedom, liberty, and a better way of live. We also recognize these individuals are extremely venerable
                to fraud, human trafficking, and the like and we have made it our duty to help those in need.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
