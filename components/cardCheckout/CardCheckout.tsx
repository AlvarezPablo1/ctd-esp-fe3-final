import { Box, Typography } from "@mui/material";
import Image from "next/image";
import checkoutStyle from './checkout.module.css'

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

const CardCheckout: React.FC<Comic> = ({ id, title, thumbnail, price }) => {
  return (
    <Box className={checkoutStyle.container}>
      <Image src={thumbnail.path + "." + thumbnail.extension} width={250} height={300} alt={title}/>
      <Typography sx={{ color: "aliceblue", textAlign: "center" }}>{title}</Typography>
      <Typography sx={{ color: "aliceblue" }}>Precio: ${price}</Typography>
    </Box>
  );
};

export default CardCheckout;
