//tiene export default porque el componente tiene que estar exportado, me ahorro la linea de abajo.
export default function DynamicRoute({id}) {
    return(
    <p>Soy una ruta dinámica- {id}</p>
    )  
}

export function getServerSideProps({params}) {
    console.log(params) //lo veo en consola.
    return {
        props: {
            id: params.id
        }
    };
}
