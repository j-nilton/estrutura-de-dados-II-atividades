class No<T> {
    public valor: T;
    public proximo: No<T> | null;
    public anterior: No<T> | null;

    constructor(valor: T) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDuplamenteEncadeada<T> {
    private cabeca: No<T> | null;
    private cauda: No<T> | null;
    private tamanho: number;

    constructor() {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    }

    // Inserção no início da lista
    public inserirNoInicio(valor: T): void {
        const novoNo = new No(valor);

        if (this.estaVazia()) {
            this.cabeca = novoNo;
            this.cauda = novoNo;
        } else {
            novoNo.proximo = this.cabeca;
            this.cabeca!.anterior = novoNo;
            this.cabeca = novoNo;
        }

        this.tamanho++;
    }

    // Inserção no fim da lista
    public inserirNoFim(valor: T): void {
        const novoNo = new No(valor);

        if (this.estaVazia()) {
            this.cabeca = novoNo;
            this.cauda = novoNo;
        } else {
            novoNo.anterior = this.cauda;
            this.cauda!.proximo = novoNo;
            this.cauda = novoNo;
        }

        this.tamanho++;
    }

    // Inserção em uma posição qualquer
    public inserirNaPosicao(valor: T, posicao: number): void {
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

        const novoNo = new No(valor);
        let atual = this.cabeca;

        for (let i = 0; i < posicao - 1; i++) {
            atual = atual!.proximo;
        }

        novoNo.proximo = atual!.proximo;
        novoNo.anterior = atual;
        atual!.proximo!.anterior = novoNo;
        atual!.proximo = novoNo;

        this.tamanho++;
    }

    // Remoção no início da lista
    public removerNoInicio(): T | null {
        if (this.estaVazia()) {
            return null;
        }

        const valorRemovido = this.cabeca!.valor;

        if (this.tamanho === 1) {
            this.cabeca = null;
            this.cauda = null;
        } else {
            this.cabeca = this.cabeca!.proximo;
            this.cabeca!.anterior = null;
        }

        this.tamanho--;
        return valorRemovido;
    }

    // Remoção no fim da lista
    public removerNoFim(): T | null {
        if (this.estaVazia()) {
            return null;
        }

        const valorRemovido = this.cauda!.valor;

        if (this.tamanho === 1) {
            this.cabeca = null;
            this.cauda = null;
        } else {
            this.cauda = this.cauda!.anterior;
            this.cauda!.proximo = null;
        }

        this.tamanho--;
        return valorRemovido;
    }

    // Remoção em uma posição qualquer
    public removerNaPosicao(posicao: number): T | null {
        if (posicao < 0 || posicao >= this.tamanho || this.estaVazia()) {
            return null;
        }

        if (posicao === 0) {
            return this.removerNoInicio();
        }

        if (posicao === this.tamanho - 1) {
            return this.removerNoFim();
        }

        let atual = this.cabeca;

        for (let i = 0; i < posicao; i++) {
            atual = atual!.proximo;
        }

        atual!.anterior!.proximo = atual!.proximo;
        atual!.proximo!.anterior = atual!.anterior;

        this.tamanho--;
        return atual!.valor;
    }

    // Exibição da lista na ordem normal
    public exibirOrdemNormal(): void {
        let atual = this.cabeca;
        let resultado = "";

        while (atual !== null) {
            resultado += atual.valor + " <-> ";
            atual = atual.proximo;
        }

        console.log(resultado + "null");
    }

    // Exibição da lista na ordem inversa
    public exibirOrdemInversa(): void {
        let atual = this.cauda;
        let resultado = "";

        while (atual !== null) {
            resultado += atual.valor + " <-> ";
            atual = atual.anterior;
        }

        console.log("null <-> " + resultado);
    }

    // Verificar se lista está vazia
    public estaVazia(): boolean {
        return this.tamanho === 0;
    }

    // Esvaziar a lista
    public esvaziar(): void {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    }

    // Exibir o tamanho da lista
    public obterTamanho(): number {
        return this.tamanho;
    }
}

// Exemplo de uso

const lista = new ListaDuplamenteEncadeada<number>();

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