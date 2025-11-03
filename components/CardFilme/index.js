 export default function CardFilme({filme}) { //componente CardFilme que recebe um objeto filme como prop
    const estiloCardFilme = { //objeto de estilo para o card de filme
        width: '100%', //definir a largura do card
        height: '100%', //definir a altura do card
        borderRadius: "8px", //definir o raio da borda do card
        overflow: "hidden", //definir o overflow do card
        position: "relative", //definir a posição do card
    }; //fechar o objeto de estilo

    const estiloImagem = { //objeto de estilo para a imagem  
        width: "100px", //definir a largura da imagem
        height: "100px", //definir a altura da imagem
        objectFit: "cover", //definir o ajuste da imagem
        opacity: "1", //definir a opacidade da imagem
    }; //fechar o objeto de estilo

    const estiloConteinerInfoFilme = { //objeto de estilo para o contêiner de informações do filme
        color: 'ffffff',
        position: 'absolute', //definir a posição do contêiner
        bottom: "0", //definir a posição inferior do contêiner
        background: "linear-gradient(rgba(0,0,0,0.1)), rgba(0,0,0,0.9)", //definir o fundo do contêiner
        height: '200px', //definir a altura do contêiner
        width: '100%', //definir a largura do contêiner
        display: 'flex', //definir o display do contêiner
        flexDirection: 'column', //definir a direção do flex do contêiner
        justifyContent: 'end', //definir o alinhamento do conteúdo do contêiner
        padding: '10px', //definir o padding do contêiner
    }; //fechar o objeto de estilo

    return (
        <li key={`card-filme-${filme.id}`}>
            <img style={estiloImagem} src={filme.poster} />
            <div style={estiloConteinerInfoFilme}>
                <div style={estiloImagem} src={filme.poster}>
                    <p>Título: {filme.titulo}</p>
                    <p>Ano: {filme.ano}</p>
                    <p>Gênero: {filme.genero}</p>
                    <p>Nota: {filme.nota}</p>
                </div>
            </div>
        </li>
    )
    
}