// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

// components
import Page from '../components/Page';
import { PracticeHero, PracticeContent, PracticeCaurosel } from '../components/_external-pages/practice';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function PracticeAreas() {
  return (
    <RootStyle title="Practice Area | Bright-UI">
      <PracticeHero />
      <PracticeContent />
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      <PracticeCaurosel />
    </RootStyle>
  );
}
