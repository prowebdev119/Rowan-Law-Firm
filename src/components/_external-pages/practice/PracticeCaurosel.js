import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box, Card, Container, Typography } from '@material-ui/core';
//
import { varFadeIn, varFadeInUp, MotionInView } from '../../animate';
import { CarouselControlsArrowsBasic2 } from '../../carousel';

// ----------------------------------------------------------------------

const PRACTICES = [
  {
    name: 'Wrongful Death or Catastrophic Injury Litigation ',
    avatar: '/static/practice/wrongful.jpg',
    bill: '(Contingency Fee Contract)'
  },
  {
    name: 'Whistleblower Cases & Qui-Tam Actions',
    avatar: '/static/practice/whistleblower.jpg',
    bill: '(Contingency Fee Contract)'
  },
  {
    name: 'Personal Injury',
    avatar: '/static/practice/personalinjury.jpg',
    bill: '(Contingency Fee Contract)'
  },
  {
    name: 'Workers Comp',
    avatar: '/static/practice/professional.jpg',
    bill: '(Contingency Fee Contract)'
  },
  {
    name: 'Business Law litigation',
    avatar: '/static/practice/businesslaw.jpg',
    bill: '(Contingency Fee Contract)'
  }
];

// ----------------------------------------------------------------------

PracticeCard.propTypes = {
  practice: PropTypes.object
};

function PracticeCard({ practice }) {
  const { name, avatar, bill } = practice;
  return (
    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Box component="img" src={avatar} sx={{ width: '100%', borderRadius: 1.5 }} />
      <Typography>{bill}</Typography>
    </Card>
  );
}

export default function PracticeCaurosel() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0 80px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Our Practice Areas
        </Typography>
      </MotionInView>

      <Box sx={{ position: 'relative' }}>
        <Slider ref={carouselRef} {...settings}>
          {PRACTICES.map((practice) => (
            <MotionInView key={practice.name} variants={varFadeIn}>
              <PracticeCard key={practice.name} practice={practice} />
            </MotionInView>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-64px)' }}
        />
      </Box>
    </Container>
  );
}
