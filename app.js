function pesquisar() {

  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  // Buscando no html o valor digitado no campo pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campo de pesquisa estiver vazio
  if(campoPesquisa == ""){
    section.innerHTML = "Para começar, digite um tipo na barra de pesquisa";
    return;
  }
    
  // Transformando a 
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados e titulo formatados
  let resultados = "";
  let titulo = "";
  let tags = "";
  
  // Itera sobre cada elemento (dado) no array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "Nenhum pokémon encontrado, digite um tipo válido (Normal, Fogo, Água, Grama, etc.)"
  }
  
  // Atribui o HTML construído à seção, atualizando a página com os resultados
  section.innerHTML = resultados;
}