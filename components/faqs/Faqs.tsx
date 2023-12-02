import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import { faqsData } from "./faqsData";




function Faqs() {

  const faq = faqsData;

  return (
    <div>
      <Typography sx={{ color: "#ffb52d", fontSize: "3rem", margin: "3rem 0"}}>
        Preguntas Frecuentes
      </Typography>
    {faq?.map(items =>(
      <Box key={items.id} maxWidth={"lg"}>
        <Accordion  sx={{background: "black",border: "1px solid #FFA500"}}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography sx={{color:"aliceblue"}}>{items.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{color:"aliceblue",borderTop: "1px solid aliceblue"}}>
          {items.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
      </Box>
    ))}
    </div>
  )
}
export default Faqs