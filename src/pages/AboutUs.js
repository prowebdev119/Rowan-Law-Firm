// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, Testimonial } from '../components/_external-pages/about';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <RootStyle title="About Us | Bright-UI">
      <AboutHero />
      <AboutWhat />
      <Testimonial />
    </RootStyle>
  );
}
