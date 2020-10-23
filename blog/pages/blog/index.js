export default function Prueba({ blogs }) {
    return <p>{blogs.map((blog, key) => {
    return <p key={key}>{blog.title}</p>
    })}</p>
  }
  
  export async function getStaticProps() {
    const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
    const json = await data.json();
  
    return {
      props: {
        blogs: json
      },
      revalidate: 23
    };
  }