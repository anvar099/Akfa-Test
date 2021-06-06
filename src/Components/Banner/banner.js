import React from 'react';
import './styles.css'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_960_720.jpg',
  },
  {
    imgPath:
      'https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2016/08/13/12/04/building-1590596_960_720.jpg',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2016/12/03/17/38/building-1880261_960_720.jpg',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2017/03/27/18/38/rain-2179933_960_720.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "88%",
    flexGrow: 1,
    marginLeft: 'auto',
    position: "relative",
  },
  title: {
    position: "absolute",
    color: "#f3f3f3",
    marginTop: 100,
    marginLeft: "12%",
    fontSize: 55,
    width: "70%",
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '1.5%',
    textAlign: "left",
  },
  subtitle: {
    position: "absolute",
    color: "#f3f3f3",
    fontSize: 20,
    width: "50%",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '5%',
    textAlign: "left",
    marginTop: 450,
    marginLeft: "45%",
  },
  img: {
    height: 600,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    objectFit: 'cover'
  },
  slider: {
    width: 280,
    backgroundColor: '#161818',
    position: 'absolute',
    marginTop: -75,
    height: 60,
  },
  arrowL: {
    color: "#f3f3f3",
  },
  arrowR: {
    color: "#f3f3f3",
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

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
    <div className={classes.root}>
     <div className="border"></div>
     <div className="border-long"></div>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
       
        {tutorialSteps.map((step, index) => (
          
          <div>
             <div className={classes.title}>проектирование, изготовление, продажа и монтаж металлоконструкций</div>
             <div className={classes.subtitle}>«Akfagroup» предоставляет полный спектор услуг - от проектирования и производства металлоконструкций до доставки на объекты и монтажа.</div>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="progress"
      steps={5}
      position="static"
      activeStep={activeStep}
      className={classes.slider}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
          {theme.direction === 'rtl' ? <KeyboardArrowLeft className={classes.arrowL} /> : <KeyboardArrowRight className={classes.arrowR} />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight className={classes.arrowR} /> : <KeyboardArrowLeft className={classes.arrowL} />}
        </Button>
      }
    />
    </div>
  );
}

export default SwipeableTextMobileStepper;