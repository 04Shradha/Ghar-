import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CarImage1 from '../assets/img.jpg'; // Import the first image
import CarImage2 from '../assets/car2.jpg'; // Import the second image
import CarImage3 from '../assets/car3.jpg'; // Import the third image

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      imgPath: CarImage1,
      content: (
        <div className="bg-slate-900 bg-opacity-50 px-20 py-10 flex flex-col items-center justify-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          <h1 className='text-white font-bold mb-3 text-7xl text-center'>Rental Rooms</h1>
          <div className='border-4 m-4 w-60 border-pink-200 inline-block'></div>
          <h1 className='font-bold text-white m-3 text-5xl text-center'>Deluxe Rooms Starting At 600 Pln</h1>
          <button className='bg-pink-200 rounded-lg font-bold text-black text-xl p-3 m-3'>Our Rooms</button>
        </div>
      ),
    },
    {
      imgPath: CarImage2,
      content: (
        <div className="bg-slate-900 bg-opacity-50 px-20 py-10 flex flex-col items-center justify-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          <h1 className='text-white font-bold mb-3 text-7xl text-center'>Paying Guest</h1>
          <div className='border-4 m-4 w-60 border-pink-200 inline-block'></div>
          <h1 className='font-bold text-white m-3 text-5xl text-center'>Deluxe Rooms Starting At 600 Pln</h1>
          <button className='bg-pink-200 rounded-lg font-bold text-black text-xl p-3 m-3'>Our Rooms</button>
        </div>
      ),
    },
    {
      imgPath: CarImage3,
      content: (
        <div className="bg-slate-900 bg-opacity-50 px-20 py-10 flex flex-col items-center justify-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          <h1 className='text-white font-bold mb-3 text-7xl text-center'>Food service</h1>
          <div className='border-4 m-4 w-60 border-pink-200 inline-block'></div>
          <h1 className='font-bold text-white m-3 text-5xl text-center'>Deluxe Rooms Starting At 600 Pln</h1>
          <button className='bg-pink-200 rounded-lg font-bold text-black text-xl p-3 m-3'>Our Rooms</button>
        </div>
      ),
    },
  ];
  

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      {/* Carousel */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ height: '100vh' }}
      >
        {images.map((step, index) => (
          <div key={step.imgPath}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100vh',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={`Image ${index}`}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      {/* Div elements */}
      {images.map((step, index) => (
        <React.Fragment key={index}>
          {activeStep === index && step.content}
        </React.Fragment>
      ))}
      
      {/* Mobile Stepper */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
