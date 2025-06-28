# Estrutura de Dados em TypeScript - Disciplina: Estrutura de Dados II

Repositório contendo implementações de estruturas de dados fundamentais em TypeScript, desenvolvidas para fins educacionais e de aplicação prática.

## Estrutura do Projeto

```
estrutura-de-dados/
├── 01-atividade-deque/
│ ├── Atividade_Estrutura de Dados_Deque.pdf
│ ├── deque.js
│ ├── deque.ts
│ └── README.md
│
├── 02-atividade-lista-duplamente-encadeada/
│ ├── Atividade_Lista Duplamente Encadeada.pdf
│ ├── listaDuplamenteEncadeada.js
│ ├── listaDuplamenteEncadeada.ts
│ └── README.md
│
├── 03-atividade-arvore-binaria/
│ ├── Atividade_Arvore Binaria de Busca.pdf
│ ├── arvoreBinariaDeBusca.js
│ ├── arvoreBinariaDeBusca.ts
│ └── README.md
│
├── node_modules/
├── .gitattributes
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```


## Estruturas Implementadas

### 1. Deque
- **Localização**: `01-atividade-deque/`
- **Características**:
  - Inserção/remoção O(1) nas extremidades
  - Operações `pushFront`, `pushBack`, `popFront`, `popBack`
  - Uso de objeto indexado para eficiência

### 2. Lista Duplamente Encadeada
- **Localização**: `02-atividade-lista-duplamente-encadeada/`
- **Características**:
  - Navegação bidirecional (anterior/próximo)
  - Inserção/remoção em posições arbitrárias
  - Travessia normal e inversa

### 3. Árvore Binária de Busca
- **Localização**: `03-atividade-arvore-binaria-de-busca/`
- **Características**:
  - Inserção ordenada automática
  - Travessias: pré-ordem, em-ordem, pós-ordem e BFS
  - Cálculo de altura e balanceamento

## Configuração do Ambiente

### Pré-requisitos
- Node.js
- npm
- TypeScript

```bash
# Instalar dependências
npm install

# Compilar todos os projetos TypeScript
npx tsc [nome-do-arquivo]