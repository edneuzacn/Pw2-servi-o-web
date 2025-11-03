import { useLinkStatus } from "next/link.js";
import { filmes }from "../data/filmes.js"//importar o array de filmes
import CardFilme from "../components/CardFilme/index.js"//importar o componente CardFilme


function Home() {//componente Home
    const estiloListaCard = {//objeto de estilo para a lista de cards
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",//definir 3 colunas de largura igual
        gap: "16px",//definir o espaçamento entre os cards
        listStyle: "none",//remover os marcadores da lista
       
    };//fechar o objeto de estilo

    return <>
    return <h1>Filmes</h1>//título da página

    <ul>//lista de filmes 
        <li>//item da lista
            <p>Nome do filme</p>
            <ul style ={estiloListaCard}> //lista de cards de filmes com o estilo definido
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

   
