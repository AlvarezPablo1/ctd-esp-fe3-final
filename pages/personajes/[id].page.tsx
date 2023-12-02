import Container from "@mui/material/Container";
import CardCharacter from "dh-marvel/components/cardCharacter/CardCharacter";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = (async ({query}) => {

  const characterId = Number(query.id)
  const res = await getCharacter(characterId)
  const data = await res
  return { props: { data } }
});

const Character: React.FC = ({ data }: any) => {

  return (
    <Container sx={{marginTop: "30px"}}>
      <CardCharacter id={data.id} name={data.name} description={data.description} thumbnail={data.thumbnail}/>
    </Container>
  );
};



export default Character;