# Árvore Binária de Busca (BST) em TypeScript

## Visão Geral
Implementação completa de uma **Árvore Binária de Busca** (Binary Search Tree) em TypeScript, uma estrutura de dados não-linear que armazena elementos de forma ordenada, permitindo operações eficientes de busca, inserção e remoção.

## Principais Características
- **Ordenação automática**: Mantém os elementos sempre ordenados
- **Busca eficiente**: Tempo logarítmico em árvores balanceadas
- **Travessias flexíveis**: Vários métodos de percurso disponíveis
- **Tipagem forte**: Implementação genérica para qualquer tipo de dado

## Operações Implementadas

### Operações Básicas
| Operação | Descrição | Complexidade |
|----------|-----------|--------------|
| `inserir(valor)` | Adiciona novo nó mantendo a propriedade BST | O(log n)* |
| `contem(valor)` | Verifica se valor existe na árvore | O(log n)* |
| `altura()` | Retorna a altura da árvore | O(n) |

### Travessias
| Método | Ordem | Complexidade |
|--------|-------|--------------|
| `preOrdem()` | Raiz → Esquerda → Direita | O(n) |
| `emOrdem()` | Esquerda → Raiz → Direita (ordenado) | O(n) |
| `posOrdem()` | Esquerda → Direita → Raiz | O(n) |
| `buscaEmLargura()` | Por níveis (BFS) | O(n) |

## Como Utilizar

### Pré-requisitos
- Node.js
- TypeScript

```bash
# Compilar
npx tsc arvoreBinariaDeBusca.ts

# Executar
node arvoreBinariaDeBusca.js