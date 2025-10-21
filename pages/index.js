import { useLinkStatus } from "next/link.js";
import { filmes }from "../data/filmes.js"//importar o array de filmes

function CardFilme({filme}) {
    const estiloImagem = {//objeto de estilo para a imagem  
        width:"300px"//definir a largura da imagem
    };//fechar o objeto de estilo

    return(
         <li key={`card-filme-${filme.id}`}> 
                                <p>Título:{ filme.titulo}</p>
                                <p> Ano:{ filme.ano}</p>
                                <p> Gênero:{ filme.genero}</p>
                                <p>Nota:{ filme.nota}</p>
                                <img style={estiloImagem} src={filme.poster}/>
                            </li>
    )
}
function Home() {//componente Home

    return <>
    return <h1>Filmes</h1>//título da página

    <ul>//lista de filmes 
        <li>//item da lista
            <p>Nome do filme</p>
            <ul>
                {
                    filmes.map(( filme) => {
                        return(
                            <CardFilme filme={filme} key={filme.id}/>

                            
                           
                        );
                    })
                }    
            </ul>
                
        </li>
    </ul>
    <p>lista de filmes aqui</p>
        </>  
}
export default Home;//exportar o componente Home como padrão
   
