import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CardsStyle from "./card.module.css"
// Representa un cómic de Marvel
interface ComicCard {
  id: number; // El ID único del recurso del cómic
  title: string; // El título canónico del cómic
  thumbnail: Image; // La imagen representativa del cómic
}
// Representa una imagen asociada con el cómic
interface Image {
  path: string; // La ruta de la imagen
  extension: string; // La extensión del archivo de la imagen
}

const Cards: React.FC<ComicCard> = ({ id, title, thumbnail }) => {

  return (
    <>
      <Link href={`/comics/${id}`}>
      <Box className={CardsStyle.cardContainer}>
          <Image src={thumbnail.path + ".jpg"}className="card-img" width={200}height={250} alt="comic" layout="responsive"/>
          <Box className="card-info-button">
            <Box className="card-info">
              <Typography className="text-title" style={{color: "aliceblue", padding: "1rem 0", textAlign: "center"}}>{title}</Typography>
            </Box>
            <Box className={CardsStyle.btnSection}>
                <Link href={`/checkout/${id}`}>
                  <Box className="card-button">
                    <button className={CardsStyle.button}>Comprar</button>
                  </Box>
                </Link>
              <Link href={`/comics/${id}`}>
                <button className={CardsStyle.button}>Ver detalle</button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Link>
        
    </>
  );
};

export default Cards;