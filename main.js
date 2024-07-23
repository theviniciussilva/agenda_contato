const form = document.getElementById('form')
const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
const mensagemSucesso = '<td><span class="mensagem-sucesso">Cadastrado</span></td>';

const nomes = [];
const telefones = [];


let linhas = "";
form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){

    if(nomes.includes(inputNome.value), telefones.includes(inputTelefone.value)){
        alert('Esse nome ou telefone já foi cadastrado')
    }
    else{
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);
    
        let linha;
        linha = '<tr>'
        linha += `<td> ${inputNome.value} </td>`
        linha += `<td> ${inputTelefone.value} </td>`
        linha += '</tr>'
        linhas += linha;
    }

}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    const footTabela = document.querySelector('tfoot');
    const nomeSucesso = `<td></td>`;
    corpoTabela.innerHTML = linhas;
    footTabela.innerHTML = nomeSucesso + mensagemSucesso;

    inputNome.value = "";
    inputTelefone.value = "";
}




