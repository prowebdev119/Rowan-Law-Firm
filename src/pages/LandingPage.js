// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

// components
import Page from '../components/Page';
import { LandingHero, LandingIntro, LandingNeeded } from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Raw Firm | Bright-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingNeeded />
        <LandingIntro />
        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      </ContentStyle>
    </RootStyle>
  );
}
