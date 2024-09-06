function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos, através do seu ID.
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;
    
    if (!campoPesquisa){
        section.innerHTML = "<p>Digite um título para pesquisar</p>"
        return
    }    
    
    campoPesquisa = campoPesquisa.toLowerCase()

    //console.log(campoPesquisa)
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (jogador) no array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.titulo.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
                // Concatena HTML para cada jogador, formatando o título, descrição e link.
                // As crase `` permitem a interpolação de strings, inserindo os valores das variáveis.
                resultados += `
                <div class="item-resultado">
                    <h2> 
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">mais informações</a>
                </div>
                `;
            }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui a string com os resultados HTML ao conteúdo da seção.
    section.innerHTML = resultados;
  }