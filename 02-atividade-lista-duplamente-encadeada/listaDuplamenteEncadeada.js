var No = /** @class */ (function () {
    function No(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
    return No;
}());
var ListaDuplamenteEncadeada = /** @class */ (function () {
    function ListaDuplamenteEncadeada() {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    }
    // Inserção no início da lista
    ListaDuplamenteEncadeada.prototype.inserirNoInicio = function (valor) {
        var novoNo = new No(valor);
        if (this.estaVazia()) {
            this.cabeca = novoNo;
            this.cauda = novoNo;
        }
        else {
            novoNo.proximo = this.cabeca;
            this.cabeca.anterior = novoNo;
            this.cabeca = novoNo;
        }
        this.tamanho++;
    };
    // Inserção no fim da lista
    ListaDuplamenteEncadeada.prototype.inserirNoFim = function (valor) {
        var novoNo = new No(valor);
        if (this.estaVazia()) {
            this.cabeca = novoNo;
            this.cauda = novoNo;
        }
        else {
            novoNo.anterior = this.cauda;
            this.cauda.proximo = novoNo;
            this.cauda = novoNo;
        }
        this.tamanho++;
    };
    // Inserção em uma posição qualquer
    ListaDuplamenteEncadeada.prototype.inserirNaPosicao = function (valor, posicao) {
        if (posicao < 0 || posicao > this.tamanho) {
            throw new Error("Posição inválida");
        }
        if (posicao === 0) {
            this.inserirNoInicio(valor);
            return;
        }
        if (posicao === this.tamanho) {
            this.inserirNoFim(valor);
            return;
        }
        var novoNo = new No(valor);
        var atual = this.cabeca;
        for (var i = 0; i < posicao - 1; i++) {
            atual = atual.proximo;
        }
        novoNo.proximo = atual.proximo;
        novoNo.anterior = atual;
        atual.proximo.anterior = novoNo;
        atual.proximo = novoNo;
        this.tamanho++;
    };
    // Remoção no início da lista
    ListaDuplamenteEncadeada.prototype.removerNoInicio = function () {
        if (this.estaVazia()) {
            return null;
        }
        var valorRemovido = this.cabeca.valor;
        if (this.tamanho === 1) {
            this.cabeca = null;
            this.cauda = null;
        }
        else {
            this.cabeca = this.cabeca.proximo;
            this.cabeca.anterior = null;
        }
        this.tamanho--;
        return valorRemovido;
    };
    // Remoção no fim da lista
    ListaDuplamenteEncadeada.prototype.removerNoFim = function () {
        if (this.estaVazia()) {
            return null;
        }
        var valorRemovido = this.cauda.valor;
        if (this.tamanho === 1) {
            this.cabeca = null;
            this.cauda = null;
        }
        else {
            this.cauda = this.cauda.anterior;
            this.cauda.proximo = null;
        }
        this.tamanho--;
        return valorRemovido;
    };
    // Remoção em uma posição qualquer
    ListaDuplamenteEncadeada.prototype.removerNaPosicao = function (posicao) {
        if (posicao < 0 || posicao >= this.tamanho || this.estaVazia()) {
            return null;
        }
        if (posicao === 0) {
            return this.removerNoInicio();
        }
        if (posicao === this.tamanho - 1) {
            return this.removerNoFim();
        }
        var atual = this.cabeca;
        for (var i = 0; i < posicao; i++) {
            atual = atual.proximo;
        }
        atual.anterior.proximo = atual.proximo;
        atual.proximo.anterior = atual.anterior;
        this.tamanho--;
        return atual.valor;
    };
    // Exibição da lista na ordem normal
    ListaDuplamenteEncadeada.prototype.exibirOrdemNormal = function () {
        var atual = this.cabeca;
        var resultado = "";
        while (atual !== null) {
            resultado += atual.valor + " <-> ";
            atual = atual.proximo;
        }
        console.log(resultado + "null");
    };
    // Exibição da lista na ordem inversa
    ListaDuplamenteEncadeada.prototype.exibirOrdemInversa = function () {
        var atual = this.cauda;
        var resultado = "";
        while (atual !== null) {
            resultado += atual.valor + " <-> ";
            atual = atual.anterior;
        }
        console.log("null <-> " + resultado);
    };
    // Verificar se lista está vazia
    ListaDuplamenteEncadeada.prototype.estaVazia = function () {
        return this.tamanho === 0;
    };
    // Esvaziar a lista
    ListaDuplamenteEncadeada.prototype.esvaziar = function () {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    };
    // Exibir o tamanho da lista
    ListaDuplamenteEncadeada.prototype.obterTamanho = function () {
        return this.tamanho;
    };
    return ListaDuplamenteEncadeada;
}());
// Exemplo de uso
var lista = new ListaDuplamenteEncadeada();
console.log("Lista vazia?", lista.estaVazia());
lista.inserirNoFim(10);
lista.inserirNoFim(20);
lista.inserirNoInicio(5);
lista.inserirNaPosicao(15, 2);
lista.exibirOrdemNormal();
lista.exibirOrdemInversa();
console.log("Tamanho:", lista.obterTamanho());
lista.removerNoInicio();
lista.removerNoFim();
lista.removerNaPosicao(1);
lista.exibirOrdemNormal(); // 10 <-> null
lista.esvaziar();
console.log("Lista vazia?", lista.estaVazia()); // true
