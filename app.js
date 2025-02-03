//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaAmigos =[];
let Nome;
let indice=0;
const resultado = document.getElementById("resultado");
let valido = true;


let Lista = document.getElementById("listaAmigos");
Nome=document.querySelector('input').value;

function adicionarAmigo (){
    Nome=document.querySelector('input').value;
    document.getElementById('listaAmigos');
    if(Nome==''){   
        alert('coloque um nome valido');
    } else if (ListaAmigos.includes(Nome)) {
        alert('Este nome já está na lista');
    } 
    else{
        GuardaNome(ListaAmigos,Nome, valido);
        console.log(ListaAmigos);
        atualizarListaAmigos();
    }
}

function GuardaNome(lista,n){
    lista.push(n);
    return ListaAmigos   
}


function sortearAmigo(lista){
    if(ListaAmigos.length==0){
        alert('coloque um nome valido antes de sortear');
    }else{
        let NomeSorteado = parseInt(Math.random()*ListaAmigos.length);
        resultado.innerHTML = `<h1>O amigo sorteado é: ${ListaAmigos[NomeSorteado]}</h1>`;
        Lista.innerHTML = ""; 

}
}

function atualizarListaAmigos() {
    Lista.innerHTML = ""; // Limpa a lista exibida
    resultado.innerHTML = ""; // Limpa o resultado do sorteio

    ListaAmigos.forEach((nome, indice) => {
        const li = document.createElement("li");
        li.textContent = nome;

        // Cria botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "x";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = () => removerAmigo(indice);

        // Adiciona o botão ao item da lista
        li.appendChild(botaoRemover);
        Lista.appendChild(li);
    });
}

function removerAmigo(indice) {
    ListaAmigos.splice(indice, 1); // Remove o nome pelo índice
    atualizarListaAmigos(); // Atualiza a lista exibida
}



