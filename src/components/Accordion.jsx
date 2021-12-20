import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const AccordionStyled = styled((props) => <Accordion {...props} />)(() => ({
  backgroundColor: '#99d599', 
}));
const AccordionSummaryStyled = styled((props) => <AccordionSummary {...props} />)(() => ({
<<<<<<< HEAD
  backgroundColor: '#006e4a',
=======
  backgroundColor: '#006a4e',
>>>>>>> 3efbcfa9df590ef9f426a1584c23bc79e39dde50
}));
const AccordionDetailsStyled = styled((props) => <AccordionDetails {...props} />)(() => ({
  backgroundColor: '#c5cbb5',
}));

export { AccordionStyled, AccordionSummaryStyled, AccordionDetailsStyled };