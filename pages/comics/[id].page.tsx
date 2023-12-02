import { Container } from "@mui/material";
import CardDetail from "dh-marvel/components/cardDetail/CardDetail";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";


interface Character {
  name: string;
}

export const getServerSideProps: GetServerSideProps = (async ({query}) => {

  const id = Number(query.id) 
  const res = await getComic(id)
  const data = await res
  return { props: { data } }
});

function ComicDetail({ data }: any) {

  return(
    <Container>
      <CardDetail
        id={data.id}
        title={data.title}
        description={data.description}
        thumbnail={data.thumbnail}
        characters={data.characters}
        price={data.price}
        oldPrice={data.oldPrice}
        stock={data.stock}
      />
    </Container>
  )
  
}
export default ComicDetail