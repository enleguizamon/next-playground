export default function Prueba({ name }) {
  return <p>Esto es una prueba de {name}</p>
}

export async function getStaticProps() {
  const data = await fetch("https://api.github.com/users/enleguizamon");
  const json = await data.json();

  return {
    props: {
      name: json.bio
    },
    revalidate: 23 //segundos
  };
}

//https://docs.dev.to/api/#operation/getArticles
//https://dev.to/api/articles?tag=javascript&top=1