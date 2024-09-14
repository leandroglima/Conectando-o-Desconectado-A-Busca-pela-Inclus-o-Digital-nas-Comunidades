
function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == "") {
        section.innerHTML = "Pesquisa não encontrado"
       return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let armazenar = "";
    let descricao = "";
    let titulo = "";
    let tags = "";
  
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa ) || tags.includes(campoPesquisa)){
        armazenar += `
        <div class= "item-resultado">
            <h2>
                <a href= "#" target="_blank">${dado.titulo}
                </a>
             <h2>
             <p class= "descricao-meta">${dado.descricao}</p>
             <a href=${dado.link} target="_blank">Saiba mais</a>
        </div>
        <img src="${dado.imagem} class="item-imagem">
        </div> 
        `;
      }
    }
    if (!armazenar) {
        armazenar = "<p>Pesquisa não encontrada</P>"

    }

  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = armazenar;
};