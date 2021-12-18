import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const AccordionStyled = styled((props) => <Accordion {...props} />)(() => ({
  backgroundColor: '#99d599', 
}));
const AccordionSummaryStyled = styled((props) => <AccordionSummary {...props} />)(() => ({
  backgroundColor: '#006e4a',
}));
const AccordionDetailsStyled = styled((props) => <AccordionDetails {...props} />)(() => ({
  backgroundColor: '#c5cbb5',
}));

export { AccordionStyled, AccordionSummaryStyled, AccordionDetailsStyled };