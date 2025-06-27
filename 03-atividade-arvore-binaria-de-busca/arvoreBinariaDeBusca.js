var No = /** @class */ (function () {
    function No(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
    return No;
}());
var ArvoreBinariaBusca = /** @class */ (function () {
    function ArvoreBinariaBusca(comparar) {
        this.comparar = comparar;
        this.raiz = null;
        this.tamanho = 0;
    }
    // Inserção de elementos
    ArvoreBinariaBusca.prototype.inserir = function (valor) {
        this.raiz = this.inserirNo(this.raiz, valor);
        this.tamanho++;
    };
    ArvoreBinariaBusca.prototype.inserirNo = function (no, valor) {
        if (no === null) {
            return new No(valor);
        }
        var comparacao = this.comparar(valor, no.valor);
        if (comparacao < 0) {
            no.esquerda = this.inserirNo(no.esquerda, valor);
        }
        else if (comparacao > 0) {
            no.direita = this.inserirNo(no.direita, valor);
        }
        else {
            // Valor já existe
            this.tamanho--;
        }
        return no;
    };
    // Pesquisar elemento
    ArvoreBinariaBusca.prototype.contem = function (valor) {
        return this.buscarNo(this.raiz, valor) !== null;
    };
    ArvoreBinariaBusca.prototype.buscarNo = function (no, valor) {
        if (no === null) {
            return null;
        }
        var comparacao = this.comparar(valor, no.valor);
        if (comparacao < 0) {
            return this.buscarNo(no.esquerda, valor);
        }
        else if (comparacao > 0) {
            return this.buscarNo(no.direita, valor);
        }
        else {
            return no;
        }
    };
    // Busca em largura (BFS)
    ArvoreBinariaBusca.prototype.buscaEmLargura = function () {
        var resultado = [];
        if (this.raiz === null) {
            return resultado;
        }
        var fila = [this.raiz];
        while (fila.length > 0) {
            var noAtual = fila.shift();
            resultado.push(noAtual.valor);
            if (noAtual.esquerda !== null) {
                fila.push(noAtual.esquerda);
            }
            if (noAtual.direita !== null) {
                fila.push(noAtual.direita);
            }
        }
        return resultado;
    };
    // Pré-ordem
    ArvoreBinariaBusca.prototype.preOrdem = function () {
        var resultado = [];
        this.preOrdemNo(this.raiz, resultado);
        return resultado;
    };
    ArvoreBinariaBusca.prototype.preOrdemNo = function (no, resultado) {
        if (no !== null) {
            resultado.push(no.valor);
            this.preOrdemNo(no.esquerda, resultado);
            this.preOrdemNo(no.direita, resultado);
        }
    };
    // Em-ordem
    ArvoreBinariaBusca.prototype.emOrdem = function () {
        var resultado = [];
        this.emOrdemNo(this.raiz, resultado);
        return resultado;
    };
    ArvoreBinariaBusca.prototype.emOrdemNo = function (no, resultado) {
        if (no !== null) {
            this.emOrdemNo(no.esquerda, resultado);
            resultado.push(no.valor);
            this.emOrdemNo(no.direita, resultado);
        }
    };
    // Pós-ordem
    ArvoreBinariaBusca.prototype.posOrdem = function () {
        var resultado = [];
        this.posOrdemNo(this.raiz, resultado);
        return resultado;
    };
    ArvoreBinariaBusca.prototype.posOrdemNo = function (no, resultado) {
        if (no !== null) {
            this.posOrdemNo(no.esquerda, resultado);
            this.posOrdemNo(no.direita, resultado);
            resultado.push(no.valor);
        }
    };
    // Altura da árvore
    ArvoreBinariaBusca.prototype.altura = function () {
        return this.alturaNo(this.raiz);
    };
    ArvoreBinariaBusca.prototype.alturaNo = function (no) {
        if (no === null) {
            return -1;
        }
        var alturaEsquerda = this.alturaNo(no.esquerda);
        var alturaDireita = this.alturaNo(no.direita);
        return Math.max(alturaEsquerda, alturaDireita) + 1;
    };
    // Quantidade de elementos
    ArvoreBinariaBusca.prototype.tamanhoArvore = function () {
        return this.tamanho;
    };
    return ArvoreBinariaBusca;
}());
// Exemplo de uso
// Função de comparação para números
function compararNumeros(a, b) {
    return a - b;
}
var arvore = new ArvoreBinariaBusca(compararNumeros);
// Inserindo valores
arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(3);
arvore.inserir(7);
arvore.inserir(12);
arvore.inserir(20);
// Pesquisando elementos
console.log("Contém 7?", arvore.contem(7)); // true
console.log("Contém 99?", arvore.contem(99)); // false
// Percursos
console.log("Busca em largura:", arvore.buscaEmLargura());
console.log("Pré-ordem:", arvore.preOrdem());
console.log("Em-ordem:", arvore.emOrdem());
console.log("Pós-ordem:", arvore.posOrdem());
// Informações da árvore
console.log("Altura da árvore:", arvore.altura());
console.log("Quantidade de elementos:", arvore.tamanhoArvore());
