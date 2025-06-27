# Lista Duplamente Encadeada em TypeScript

## Visão Geral
Implementação completa de uma **lista duplamente encadeada** em TypeScript, com todas as operações básicas:
- Inserção (início, fim e posição específica)
- Remoção (início, fim e posição específica)
- Travessia (ordem normal e inversa)
- Operações auxiliares (tamanho, verificação de vazia, esvaziamento)

## Funcionalidades

### Operações Principais
| Método | Descrição | Complexidade |
|--------|-----------|--------------|
| `inserirNoInicio(valor)` | Insere no início | O(1) |
| `inserirNoFim(valor)` | Insere no final | O(1) |
| `inserirNaPosicao(valor, posicao)` | Insere em posição específica | O(n) |
| `removerNoInicio()` | Remove do início | O(1) |
| `removerNoFim()` | Remove do final | O(1) |
| `removerNaPosicao(posicao)` | Remove de posição específica | O(n) |

### Operações de Consulta
| Método | Descrição |
|--------|-----------|
| `exibirOrdemNormal()` | Exibe do início ao fim |
| `exibirOrdemInversa()` | Exibe do fim ao início |
| `estaVazia()` | Verifica se está vazia |
| `obterTamanho()` | Retorna quantidade de nós |

## Como Usar

### Pré-requisitos
- Node.js
- TypeScript

```bash
# Instalar dependências
npm i

# Compilar
npx tsc listaDuplamenteEncadeada.ts

# Executar
node listaDuplamenteEncadeada.js