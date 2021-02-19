// array onde será armazenado cadastro
var cadastros = [];

//cria uma nova linha na tabela passando paramentro de cadastro
function adicionaTr(_cadastro, _indice){
    // Adiciona cadastro
    $("#tabelito").append(
      `<tr class="row center-xs"> 
        <td class="col-xs-4"> ${_indice+1} </td>
        <td class="col-xs-4"> ${_cadastro.tarefa} </td> 
        <td class="col-xs-4">
          <button class='btn btn-success botaoRemover' id='${_indice}'> 
            <i class="fas fa-check"></i>
          </button>
        </td> 
      </tr>`
    );
  }
//esvazia o tbody tão rápido que não percebemos
function clearTable(){
  $("tbody").empty();
}
//cadastros recebera agora obj nome e cpf
//após isso vai deixar a tbody vazia
// e por fim chamará o renderArray responsavel por adicionar um novo cadastro e nova linha tbm  
function addCadastration(tarefa, indice){
    cadastros.push({tarefa: tarefa, indice: indice});
    clearTable();
    renderArray();
}

//função renderArray que faz iteração a cada array de cadastros adicionando um cadastro e um indice para cada linha, renderiza tão rápido que não percebemos 
function renderArray(){
    cadastros.forEach(function(cadastro, indice) {
        adicionaTr(cadastro, indice);
    });
    bindEvents();
}

//responsavel por ligar os eventos a partir do botao de remover, mas relaxa que ele é muito rápido 
// a função renderArray é chamada no bindEvents para quando o botao remover for clicado o processo de renderizar tambem funciona para apagar 
function bindEvents(){
    $(".botaoRemover").click(function(el2) {
        console.log('el2', el2)
        el2.preventDefault();
        let linhaAtual = el2.currentTarget.id
        cadastros.splice(linhaAtual,1);
        clearTable();
        renderArray();
        alert("Tarefa finalizada com sucesso");
    });
}

$("#botaoAdicionar").click(function(el) {
    el.preventDefault();
    let tarefa = $("#tarefa").val();
    console.log('tarefa', tarefa)
    if (tarefa !== "") {
      addCadastration(tarefa);
      limpaCampos();
    } else {
      alert('Preencha o campo de tarefa por favor')
    }
    
});

function limpaCampos(){
    $("#tarefa").val("");
}