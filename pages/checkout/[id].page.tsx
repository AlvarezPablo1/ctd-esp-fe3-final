import { Box, Container, Typography } from "@mui/material";
import CardCheckout from "dh-marvel/components/cardCheckout/CardCheckout";
import StepperComp from "dh-marvel/components/stepper/Stepper";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";
import checkoutStyle from './checkout.module.css';

interface Comic {
  id: number;
  title: string;
  thumbnail: Image;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const idPage = query.id;
  const comicId = Number(idPage);
  const comic = await getComic(comicId);

  const { id, title, thumbnail, price } = comic;

  return {
    props: {id,title,thumbnail,price,},
  };
};


const Checkout: React.FC<Comic> = ({ id, title, thumbnail, price }) => {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "50vh",
      marginTop: "2rem"
    }}>
      <Typography variant="caption" sx={{
                          color: "#ff9f59",
                          fontSize: "30px",
                          textTransform: "uppercase",
                        }}>
        {title}
      </Typography>
      <Box className={checkoutStyle.form}>
        <StepperComp id={id} title={title} thumbnail={thumbnail} price={price}/>
        <CardCheckout id={id} title={title} thumbnail={thumbnail} price={price}/>
      </Box>
    </Container>
  );
};


export default Checkout;
