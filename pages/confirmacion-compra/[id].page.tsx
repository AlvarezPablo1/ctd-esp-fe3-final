'use client'

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { GetServerSideProps } from "next";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Button from '@mui/material/Button';
import confirmationStyle from './confirmation.module.css'
import { useEffect, useState } from "react";

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

interface Data {
  customer: {
      name: string;
      lastname: string;
      email: string;
      address: {
        addressHome: string;
        addressDept: string | null;
        city: string;
        state: string;
        zipCode: number;
      },
    },
}

const confirmarCompra: React.FC<Comic> = ({id, title, thumbnail, price }) => {

  const [storage, setStorage] = useState<Data>();

  useEffect(() => {
    const storedData = localStorage.getItem("formattedFormData");

    if (storedData) {
      const formData = JSON.parse(storedData);
      console.log("Datos recuperados:", formData);
      setStorage(formData)
    }
  }, []);
  
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
                          height: "50vh"
                        }}>
        Que disfrutes tu compra
      </Typography>
      <Box className={confirmationStyle.image}>
        <Image src={thumbnail.path + ".jpg"} width={200} height={300} alt={title}/>
        <Typography sx={{ color: "aliceblue" }}>{title}</Typography>
        <Typography sx={{ color: "aliceblue" }}>${price}</Typography>
      </Box>
      <Box sx={{backgroundColor: "#ff9f59",height: "1px", width: "100%"}}/>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Box className={confirmationStyle.info}>
          <Typography sx={{ color: "#ff9f59" }}>Datos personales</Typography>
          <Box>
            <Typography sx={{ color: "aliceblue" }}>{storage?.customer.name} {storage?.customer.lastname}</Typography>
            <Typography sx={{ color: "aliceblue" }}>{storage?.customer.email}</Typography>
          </Box>
          <Box sx={{backgroundColor: "#ff9f59",height: "1px", width: "100%"}}/>
        </Box>
        <Box className={confirmationStyle.info}>
          <Typography sx={{ color: "#ff9f59" }}>Dirección de entrega</Typography>
          <Box>
            {
              storage?.customer.address.addressDept ? (
                <Typography sx={{ color: "aliceblue" }}>{storage?.customer.address.addressDept}</Typography>
              ):
              <Typography sx={{ color: "aliceblue" }}>{storage?.customer.address.addressHome}</Typography>
            }
            <Typography sx={{ color: "aliceblue" }}>
            {storage?.customer.address.city}, {storage?.customer.address.state} ({storage?.customer.address.zipCode})
            </Typography>
          </Box>
          <Box sx={{backgroundColor: "#ff9f59",height: "1px", width: "100%"}}/>
        </Box>
      </Box>
      <Link href="/">
        <Button sx={{
                backgroundColor: '#ff9f59',
                width: '150px',
                color: 'black',
                "&:hover": {
                  backgroundColor: '#82502c',
                  color: 'aliceblue',
                },
              }}>Volver al Inicio</Button>
      </Link>
    </Container>
  );
};



export default confirmarCompra;
