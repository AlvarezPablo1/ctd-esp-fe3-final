import md5 from "md5";
import { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Cards from "../card/Cards";
import { useRouter } from "next/router";
import characterStyle from './character.module.css'

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

interface Image {
  path: string;
  extension: string;
}

interface ComicSummary {
  id: number;
  title: string;
  thumbnail: Image;
}

const CardCharacter: React.FC<Character> = ({id,name,description,thumbnail,}) => {

  const [comicsList, setComicsList] = useState<ComicSummary[]>([]);
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  useEffect(() => {
    const fetchComics = async () => {
      try {
        // const authString = generateAuthenticationString();
        const ts = new Date().getTime();
        const hash = md5(
          `${ts}feea0fcc494b97cdecb2bd347b89ef28971d700aee495fabac2ad9318cda21e8893793ba`
        );
        const limit = 6;
        const apiUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${ts}&apikey=ee495fabac2ad9318cda21e8893793ba&limit=${limit}&hash=${hash}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        setComicsList(result.data.results);
        
      } catch (error) {
        console.error("Error fetching comics:", error);
      }
    };

    fetchComics();
  }, [id]);


  return (
    <Grid container spacing={{ xs: 6, sm: 1 }} className={characterStyle.characterContainer}>
        <Button onClick={handleClick} sx={{
                backgroundColor: '#ff9f59',
                marginBottom: '2rem',
                width: '150px',
                color: 'black',
                "&:hover": {
                  backgroundColor: '#82502c',
                  color: 'aliceblue',
                },
              }}>
          Volver al comic
        </Button>
      <Grid item xs={12} sx={{ position: "relative", height: "600px" }}>
        <Image src={thumbnail.path + ".jpg"} sizes="100%" layout="fill" alt={name}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" sx={{
                          color: "#ff9f59",
                          fontSize: "30px",
                          textTransform: "uppercase",
                          fontWeight: "700",
                          textAlign: "center",
                        }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {description ? (
          <Typography sx={{ color: "aliceblue", textAlign: "justify" }}>
            {description}
          </Typography>
        ) : (
          <Typography sx={{ color: "aliceblue" }}>
            No se encontro la descripción para {name}
          </Typography>
        )}
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ backgroundColor: "#ff9f59", height: "1px"}}></Box>
      </Grid>

      <Grid item xs={12} sx={{ paddingLeft: "0px!important" }}>
        <Typography variant="h4" sx={{ color: "#ff9f59", textAlign: "center" }}>
          Comics relacionados:
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={6} className={characterStyle.comics}>
        {comicsList.map((comic) => (
          <Grid item key={comic.id} xl={4} lg={5} md={5} sm={7} xs={10}>
            <Cards
              thumbnail={comic.thumbnail}
              id={comic.id}
              title={comic.title}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CardCharacter;
