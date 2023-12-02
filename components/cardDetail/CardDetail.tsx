import {Box,Typography,Grid,Button,Accordion,AccordionSummary,AccordionDetails,} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CardDetailStyles from './cardDetail.module.css'

interface Comic {
  id: number; 
  title: string; 
  description: string
  thumbnail: Image; 
  characters: CharacterList; 
  price: number;
  oldPrice: number;
  stock: number;
}

interface CharacterList {
  available: number; 
  returned: number; 
  collectionURI: string; 
  items: CharacterSummary[]; 
}

interface CharacterSummary {
  resourceURI: string;
  name: string; 
}

interface Image {
  path: string;
  extension: string;
}

const CardDetail: React.FC<Comic> = ({id,title,description,thumbnail,characters,price,oldPrice,stock }) => {

  return (
    <Grid container spacing={{ xs: 6, sm: 1 }} className={CardDetailStyles.cardDetailContainer}>
      <Grid item xs={12}>
        <Typography variant="caption" sx={{
                          color: "#ff9f59",
                          fontSize: "30px",
                          textTransform: "uppercase",
                        }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={CardDetailStyles.image}>
        <Image src={thumbnail.path + ".jpg"} alt={title} height={500} width={350} />
      </Grid>
      <Grid item container xs={12} sm={7} className={CardDetailStyles.productSumarry}>

        <Grid item xs={11} sx={{ height: "350px" }}>
          <Typography variant="h4" sx={{ color: "#ff9f59", marginBottom: "20px" }}>
            Descripción
          </Typography>
          {description ? (
            <Typography sx={{ color: "aliceblue", textAlign: "justify" }}>
              {description}
            </Typography>
          ) : (
            <Typography sx={{ color: "aliceblue" }}>
              No se encontro la descripción para este comic.
            </Typography>
          )}
        </Grid>

        <Grid item xs={11} className={CardDetailStyles.buySection}>
          <Typography sx={{ color: "#82502c", textDecoration: "line-through" }}>Antes: ${oldPrice}</Typography>
          <Typography sx={{ color: "#ff9f59" }}>Ahora: ${price}</Typography>
          {stock == 0 ? (
            <Button sx={{ backgroundColor: "#82502c", width: "300px" }} disabled>
              Sin stock disponible.
            </Button>
          ) : (
            <Link href={`/checkout/${id}`}>
              <Button sx={{
                backgroundColor: '#ff9f59',
                width: '150px',
                color: 'black',
                "&:hover": {
                  backgroundColor: '#82502c',
                  color: 'aliceblue',
                },
              }}>
                Comprar
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Box sx={{ backgroundColor: "#ff9f59", height: "1px"}}/>
      </Grid>

      <Grid item xs={10}>
            <Typography sx={{ color: "#ff9f59", fontSize: "2rem", marginBottom: "2rem"}}>
              Personajes
            </Typography>
            <Grid container spacing={4}>
              {characters.returned ? (
                characters.items.map((character) => {
                  const characterId = character.resourceURI.split("/").pop();

                  return (
                    <Grid item key={character.name} xs={6} sm={3}>
                      <Link href={`/personajes/${characterId}`}>
                        <Typography className={CardDetailStyles.character}>
                          {character.name}{" "}
                        </Typography>
                      </Link>
                    </Grid>
                  );
                })
              ) : (
                <Grid item>
                  <Typography sx={{ color: "aliceblue" }}>
                    No se encontraron los personajes de este comic.
                  </Typography>
                </Grid>
              )}
            </Grid>
      </Grid>
    </Grid>
  );
};

export default CardDetail;
