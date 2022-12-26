import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
// utils
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

export default function AboutUs() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={12} lg={5}>
            <MotionInView variants={varFadeInUp}>
              <Box component="img" src="/static/about/rowan.jpg" sx={{ borderRadius: 2 }} />
            </MotionInView>
          </Grid>
          <Grid item sm={12} lg={7}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                About Us
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h4">History</Typography>
              <br />
              <Typography variant="h5">
                The Rowan Law Firm was founded in 2006 by Michael H. Rowan. <br />
                Mr. Rowan was hired by one of America's legendary trial lawyers Barry A. Cohen, of Tampa, FL. Mr. Rowan
                was introduced to Mr. Cohen by Clinical & Forensic Psychologist Sidney J. Merin in 1992. <br />
                During the introduction, Mr. Merin told Mr. Cohen, Mr. Rowan was a highly decorated Veteran going to Law
                School and that Mr. Cohen should hire Mr. Rowan when his studies were completed. <br /> Mr. Cohen
                extended his hand to Mr. Rowan telling him when he completed his legal studies, he would give him a job
                and teach him the ins and outs of the legal business. <br />
                When Mr. Rowan completed his legal studies, Mr. Cohen followed through with his promise of 1992 and
                hired Mr. Rowan. During his 14-year stint with Mr. Cohen, he learned the ins and outs of trial work
                leading to a single $340 Million dollar settlement, a $98 million-dollar single jury verdict, and
                numerous “Not Guilty” jury verdicts on White-Collar crime cases and high-profile Murder Trials. <br />
                When Mr. Rowan decided to start his own firm in 2006, he was quoted as saying “I should have paid Mr.
                Cohen for the legal education I received by his firm versus Mr. Cohen paying me to work for him”. <br />
                Mr. Cohen passed away in September 2018. Mr. Rowan’s firm has represented clients in more than 30
                wrongful death cases, over 2,000 personal injury cases, and over 300 Workers Comp cases. <br />
                The Rowan Law Firm has established a reputation as one of the best Business Law Attorneys in the
                Southern region. Mr. Rowan is noted for business development through advising & consulting on the pros
                and cons of Accusations and Mergers.
              </Typography>
              <br />
              <Typography variant="h4"> Mission Statement</Typography>
              <br />
              <Typography variant="h5">
                The Rowan law firm has one mission, and that mission is to win your case. Winners win, that’s what
                winners do, and our mission is to win your case.
              </Typography>
              <br />
              <Typography variant="h4">Policy</Typography>
              <br />
              <Typography variant="h5">
                The Rowan Law Firm will always inform the client and advise the client through every stage of their
                case. <br />
                We have contingency fee contracts meaning if we don’t win your case, we don’t get paid. <br />
                We have hourly contracts. <br />
                We understand litigation can be an expensive endeavor resulting in a profound financial impact on one’s
                family or business. <br />
                Therefore, we are extremely conservative in our billing methods and do not bill for non-useful work.
                <br /> We always get preapproval before hiring experts for your case.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
