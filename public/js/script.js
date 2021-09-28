// função que é chamada quando a página é carregada pela primeira vez
window.onload = () => {
  // seleciona o primeiro elemento com o id "interesse"
  const campoInteresse = document.querySelector("#interesse");

  /* 
  adiciona uma ação ao "campoInteresse":
      ao ser apertada ("keyup") alguma tecla dentro do campo, a função anônima é chamada,
      caso a tecla (e.key) for "Enter", é chamada a função adicionaInteresse
  */
  campoInteresse.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      adicionaInteresse();
    }
  });

  // seleciona o primeiro elemento com o id "addButton"
  const botaoAdicionar = document.querySelector("#addButton");
  /* 
  adiciona uma ação ao "campoInteresse":
      ao ser clicado ("click") é chamada a função "adicionaInteresse"
  */
  botaoAdicionar.addEventListener("click", adicionaInteresse);
};

// criação da função "adicionaInteresse"
function adicionaInteresse() {
  // seleciona o primeiro elemento com o id "interesse"
  const campoInteresse = document.querySelector("#interesse");
  // verifica se o campo está vazio, caso esteja, encerra a função
  if (campoInteresse.value == "") {
    return;
  }
  // seleciona o primeiro elemento "ol"
  const listaInteresses = document.querySelector("ol");

  // cria 3 elementos, um "li", um "span" e um "button"
  const novoLi = document.createElement("li");
  const novoSpan = document.createElement("span");
  const novoBotao = document.createElement("button");

  // altera o valor textual de "novoSpan" e "novoBotao"
  novoSpan.textContent = campoInteresse.value;
  novoBotao.textContent = "X";

  // acrescenta os nós dos elementos no final de "novoLi" e "listaInteresse"
  novoLi.appendChild(novoSpan);
  novoLi.appendChild(novoBotao);
  listaInteresses.appendChild(novoLi);

  /* 
  cria uma função anônima em "novoBotao" para que ele remova o último elemento
  de "novoLi" ao ser clicado ("onclick")
  */
  novoBotao.onclick = () => {
    novoLi.remove();
  };

  // seta o valor de "campoInteresse" para ""
  campoInteresse.value = "";
}
