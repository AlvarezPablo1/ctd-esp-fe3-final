import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { faqsData } from "./faqsData";




function faqAccordion() {

  const faq = faqsData;

  return (
    <div>
    {faq.map(items =>(
      <Accordion key={items.id}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{items.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {items.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
    ))}
    </div>
  )
}
export default faqAccordion