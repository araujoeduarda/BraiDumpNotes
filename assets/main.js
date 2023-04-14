const criarTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector(`[data-list]`);
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  if (valor.trim() === "") {
    alert("Por favor, informe a anotação");
    return;
  } // input so sera colocado como tarefa caso haja conteudo

  const tarefa = document.createElement(`li`);
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui(concluirTarefa)); // passar a função concluirTarefa como parâmetro
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);
  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);

const BotaoConclui = (funcaoConclui) => {
  // receber a função como parâmetro
  const botaoConclui = document.createElement("button");
  botaoConclui.innerText = "Concluir"; //adicionar texto dentro do botao
  botaoConclui.classList.add("check-button"); //adicionar css do botao
  botaoConclui.addEventListener("click", () => {
    funcaoConclui(botaoConclui); // chamar a função passando o botão como parâmetro
    botaoConclui.innerHTML = "✅";
  });
  return botaoConclui;
};

//Concluir

const concluirTarefa = (botaoConclui) => {
  // receber o botão como parâmetro
  const tarefaCompleta = botaoConclui.parentElement;
  const conteudoTarefa = tarefaCompleta.querySelector(".content");

  tarefaCompleta.classList.toggle("done");
  conteudoTarefa.classList.toggle("done"); // adicionar classe done na tag p
};

//Deletar

const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");

  botaoDeleta.innerText = "Deletar";
  botaoDeleta.addEventListener("click", (evento) => {
    deletarTarefa(evento); // chama a função deletarTarefa passando o evento como parâmetro
  });

  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;
  const tarefaCompleta = botaoDeleta.parentElement;
  tarefaCompleta.remove();
};
