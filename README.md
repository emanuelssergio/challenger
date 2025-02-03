# challenger 
Amigo Sorteado
Este projeto é uma aplicação simples em JavaScript que permite aos usuários adicionar nomes de amigos a uma lista e realizar o sorteio de um nome aleatório dessa lista.

Funcionalidades
    Adicionar Amigos:
        Permite adicionar nomes à lista de amigos.
        Exibe um alerta caso o nome inserido seja vazio.
    
    Sortear Amigo:
        Sorteia aleatoriamente um nome da lista de amigos.
        Exibe um alerta caso a lista esteja vazia.

    Atualizar Lista:
        Atualiza dinamicamente a lista exibida com os amigos adicionados.

Como usar
    Digite um nome no campo de entrada.
    Clique no botão Adicionar para inserir o nome na lista.
    Após adicionar nomes, clique no botão Sortear para sortear um amigo da lista.

Estrutura do Código
Variáveis Globais
    ListaAmigos: Array para armazenar os nomes dos amigos.
    Nome: String que armazena o nome inserido pelo usuário.
    indice: Contador usado para iterar pela lista.
    resultado: Elemento DOM onde será exibido o nome sorteado.
    Lista: Elemento DOM que exibe a lista de amigos.

Funções Principais
    adicionarAmigo()
        Verifica se o campo de entrada está vazio.
        Adiciona o nome à lista de amigos e atualiza a exibição da lista.

    GuardaNome(lista, n)
        Insere o nome na lista de amigos e retorna o array atualizado.
        sortearAmigo(lista)

    Sorteia um nome aleatório da lista e exibe o resultado.
        Limpa a lista de amigos exibida após o sorteio.

    atualizarListaAmigos()
        Atualiza a lista exibida no DOM com os nomes presentes no array ListaAmigos e adiciona um botao remover ao lado do neme.

    removerAmigo(indice)
        remove o nome da lista selecionado


Dependências
HTML: É necessário um arquivo HTML com:
    Um campo de entrada (input) para os nomes.
    Um elemento com id="resultado" para exibir o amigo sorteado.
    Um elemento com id="listaAmigos" para exibir a lista de amigos.