import { useState } from 'react';
// material
import { useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, useMediaQuery } from '@material-ui/core';

// ----------------------------------------------------------------------
const CARDS = [
  {
    id: '1',
    title: 'Whistleblower Que Tam',
    imgUrl: '/static/home/whistleblower.png',
    color: '#0F0A34',
    videoUrl: '/static/home/introduction1.mov'
  },
  {
    id: '2',
    title: '  White Collar Crime  ',
    imgUrl: '/static/home/crime.png',
    color: '#0F0A34',
    videoUrl: '/static/home/introduction2.mov'
  },
  {
    id: '3',
    title: '  Personal Injury  ',
    imgUrl: '/static/home/personalinjury.png',
    color: '#0F0A34',
    videoUrl: '/static/home/introduction3.mov'
  },

  {
    id: '4',
    title: '  Workers Comp  ',
    imgUrl: '/static/home/workerscomp.png',
    color: '#25400F',
    videoUrl: '/static/home/introduction4.mov'
  },
  {
    id: '5',
    title: 'Wrongful Death',
    imgUrl: '/static/home/wrongfuldeath.png',
    color: '#4A2709',
    videoUrl: '/static/home/introduction5.mov'
  },
  {
    id: '6',
    title: 'D.U.I',
    imgUrl: '/static/home/dui.png',
    color: '#68620C',
    videoUrl: '/static/home/introduction6.mov'
  },
  {
    id: '7',
    title: 'Criminal Law',
    imgUrl: '/static/home/otherareas.png',
    color: '#000000',
    videoUrl: '/static/home/introduction7.mov'
  },
  {
    id: '8',
    title: 'Business Law',
    imgUrl: '/static/home/business.png',
    color: '#68620C',
    videoUrl: '/static/home/introduction8.mov'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(10)
  }
}));

// ----------------------------------------------------------------------

export default function LandingIntro() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [videoUrl, setVideoUrl] = useState('/static/home/introduction1.mov');

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 10 } }}>
          <Typography component="div" variant="h2" align="center">
            Our Services
          </Typography>
        </Box>
        <Grid container spacing={isDesktop ? 10 : 5}>
          <Grid item lg={7} md={12}>
            <Box sx={{ maxWidth: '700px', lineHeight: '0' }}>
              <Box sx={{ width: '100%' }} component="video" src={videoUrl} alt="Introduction Media" autoPlay loop />
            </Box>
            <Box sx={{ paddingTop: '20px', fontSize: '20px', color: 'common.black' }}>
              Michael H. Rowan, Attorney at Law. Over the last 20 plus years, Mr. Rowan has tried cases and worked with
              top AV-rated attorneys all over the United States.
              <br /> Those cases stemmed from California to South Carolina and from New York to Florida. <br />
              Mr. Rowan stated his worldly trial work travels taught him one quintessential “fact”; all lawyers are far
              from the same. Each lawyer has their own tactical approach to achieving their client's end result. <br />
              It’s the lawyer’s tactical approach to one’s case that will produce a positive or negative result. <br />
              Mr. Rowan developed a saying over the years, “The most valuable lessons you learn in life are the ones
              that cost you the most.”
              <br /> This lesson learned could be cheating on a loved one, whereby you get caught and the marriage you
              wanted ends.
              <br /> It could be texting and driving whereby you veer to the right or left and accidentally harm
              someone. <br />
              It could mean hiring the wrong lawyer to handle your case causing devastating financial consequences to
              you or your family.
              <br /> Mr. Rowan’s pledge to clients is:{' '}
              <i>
                <strong>
                  “If I can’t handle your case, I personally know the lawyer who can and will refer you to him or her.
                  This is what I call intellectual power of the legal industry.”
                </strong>
              </i>
              <br />
              <br />
              Mr. Rowan is recognized by his peers for having personal relationships with top experts and litigators all
              over the Country.
              <br /> He often points out experts are only as good as their insight and instincts to simplify complex
              legal matters to a jury of your peers. <br />
              If your expert cannot relate to the average jury, even if he or she is the smartest person in the world,
              your chances of winning your case are slim to none. <br />
              Mr. Rowan has been quoted in the New York Times, The Washington Post, The Los Angeles Times, and many
              other news outlets regarding his trial work involving high-profile cases. He is often quoted saying:
              “Winner’s win, it’s what they do.
              <br /> If you don’t know it yet stick around, and you will see I am a winner. <br />
              So, sit in your chair, hold on to the arm rails, don’t interfere with your case, and let me win.” Mr.
              Rowan opened his Nashville, Tennessee firm in 2006 focused on Entertainment and Business Law.
              <br /> He continues to work in Florida with top litigators focusing on Qui Tam, Whistleblower,
              Catastrophic Injury, and Wrongful Death cases.
              <br /> Mr. Rowan provides legal team leadership, direction, and motivation for a wide range of High-End
              White-Collar Crime and High-Profile Murder defenses.
              <br /> If your liberty, freedom, and life hangs in the balance of your criminal charge you have come to
              the right place. <br />
              Mr. Rowan will spare no expense to hire the best experts,{' '}
              <strong>
                <i>creative</i>
              </strong>{' '}
              investigators, jury consultants, trial advocacy specialists, and forensic specialists using{' '}
              <strong>
                <i>innovative</i>
              </strong>{' '}
              approaches to win your criminal case.
              <br /> Mr. Rowan’s philosophy is to win. Mr. Rowan is highly respected for his never-wavering commitment
              to economically disadvantaged clients with limited access or power in the legal system who have been
              wrongly accused and unjustly treated by the civil and criminal justice system.
            </Box>
          </Grid>
          <Grid item lg={5} md={12}>
            <Grid container spacing={3} sx={{ gap: '20px' }}>
              {CARDS.map((card) => (
                <Grid item key={card.id} sx={{ cursor: 'pointer' }}>
                  <Box component="div" sx={{ maxWidth: '300px' }} onClick={() => setVideoUrl(card.videoUrl)}>
                    <Box
                      sx={{
                        backgroundColor: card.color,
                        textAlign: 'center',
                        padding: '5px 10px',
                        color: 'white',
                        fontSize: '20px',
                        maxWidth: '180px'
                      }}
                    >
                      {card.title}
                    </Box>
                    <Box component="img" src={card.imgUrl} alt="CardImage" />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
