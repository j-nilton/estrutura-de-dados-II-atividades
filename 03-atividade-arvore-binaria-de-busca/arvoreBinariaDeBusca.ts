class No<T> {
    public valor: T;
    public esquerda: No<T> | null;
    public direita: No<T> | null;

    constructor(valor: T) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

class ArvoreBinariaBusca<T> {
    private raiz: No<T> | null;
    private tamanho: number;

    constructor(private comparar: (a: T, b: T) => number) {
        this.raiz = null;
        this.tamanho = 0;
    }

    // Inserção de elementos
    public inserir(valor: T): void {
        this.raiz = this.inserirNo(this.raiz, valor);
        this.tamanho++;
    }

    private inserirNo(no: No<T> | null, valor: T): No<T> {
        if (no === null) {
            return new No(valor);
        }

        const comparacao = this.comparar(valor, no.valor);

        if (comparacao < 0) {
            no.esquerda = this.inserirNo(no.esquerda, valor);
        } else if (comparacao > 0) {
            no.direita = this.inserirNo(no.direita, valor);
        } else {
            // Valor já existe
            this.tamanho--;
        }

        return no;
    }

    // Pesquisar elemento
    public contem(valor: T): boolean {
        return this.buscarNo(this.raiz, valor) !== null;
    }

    private buscarNo(no: No<T> | null, valor: T): No<T> | null {
        if (no === null) {
            return null;
        }

        const comparacao = this.comparar(valor, no.valor);

        if (comparacao < 0) {
            return this.buscarNo(no.esquerda, valor);
        } else if (comparacao > 0) {
            return this.buscarNo(no.direita, valor);
        } else {
            return no;
        }
    }

    // Busca em largura (BFS)
    public buscaEmLargura(): T[] {
        const resultado: T[] = [];

        if (this.raiz === null) {
            return resultado;
        }

        const fila: No<T>[] = [this.raiz];

        while (fila.length > 0) {
            const noAtual = fila.shift()!;
            resultado.push(noAtual.valor);

            if (noAtual.esquerda !== null) {
                fila.push(noAtual.esquerda);
            }

            if (noAtual.direita !== null) {
                fila.push(noAtual.direita);
            }
        }

        return resultado;
    }

    // Pré-ordem
    public preOrdem(): T[] {
        const resultado: T[] = [];
        this.preOrdemNo(this.raiz, resultado);
        return resultado;
    }

    private preOrdemNo(no: No<T> | null, resultado: T[]): void {
        if (no !== null) {
            resultado.push(no.valor);
            this.preOrdemNo(no.esquerda, resultado);
            this.preOrdemNo(no.direita, resultado);
        }
    }

    // Em-ordem
    public emOrdem(): T[] {
        const resultado: T[] = [];
        this.emOrdemNo(this.raiz, resultado);
        return resultado;
    }

    private emOrdemNo(no: No<T> | null, resultado: T[]): void {
        if (no !== null) {
            this.emOrdemNo(no.esquerda, resultado);
            resultado.push(no.valor);
            this.emOrdemNo(no.direita, resultado);
        }
    }

    // Pós-ordem
    public posOrdem(): T[] {
        const resultado: T[] = [];
        this.posOrdemNo(this.raiz, resultado);
        return resultado;
    }

    private posOrdemNo(no: No<T> | null, resultado: T[]): void {
        if (no !== null) {
            this.posOrdemNo(no.esquerda, resultado);
            this.posOrdemNo(no.direita, resultado);
            resultado.push(no.valor);
        }
    }

    // Altura da árvore
    public altura(): number {
        return this.alturaNo(this.raiz);
    }

    private alturaNo(no: No<T> | null): number {
        if (no === null) {
            return -1;
        }

        const alturaEsquerda = this.alturaNo(no.esquerda);
        const alturaDireita = this.alturaNo(no.direita);

        return Math.max(alturaEsquerda, alturaDireita) + 1;
    }

    // Quantidade de elementos
    public tamanhoArvore(): number {
        return this.tamanho;
    }
}

// Exemplo de uso

// Função de comparação para números
function compararNumeros(a: number, b: number): number {
    return a - b;
}

const arvore = new ArvoreBinariaBusca<number>(compararNumeros);

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