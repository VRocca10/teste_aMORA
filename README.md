# aMORA - Simulador de Investimento Imobiliário

Este projeto é um simulador simples para cálculo de valores relacionados a um investimento imobiliário, como valor de entrada, valor a financiar, total a guardar e valor mensal a guardar.

---

## Funcionalidades

- Entrada do valor do imóvel com formatação automática para moeda brasileira (R$) e pontos de milhar.
- Validação dos campos:
  - Valor do imóvel deve ser maior que zero.
  - Percentual de entrada entre 5% e 20%.
  - Tempo de duração do contrato entre 1 e 5 anos.
- Cálculo dos seguintes valores:
  - Valor de entrada (percentual aplicado sobre o valor do imóvel).
  - Valor a financiar (valor do imóvel menos valor de entrada).
  - Total a guardar (15% do valor do imóvel).
  - Valor mensal a guardar (total a guardar dividido pelo número de meses do contrato).
- Exibição dos resultados com formatação monetária brasileira (R$).

---

## Tecnologias usadas

- HTML5
- CSS (Bootstrap para estilo)
- JavaScript puro (ES6+)
- Obs: Não usei React porque ainda estou me familiarizando com a tecnologia e preferi trabalhar com JavaScript puro.

---

## Como usar

1. Abra o arquivo `index.html` em um navegador moderno.
2. Digite o valor do imóvel no campo correspondente (ex: `R$ 250.000,00`).
3. Informe o percentual de entrada (de 5 a 20).
4. Informe o tempo de duração do contrato (de 1 a 5 anos).
5. Clique no botão **Simular** para ver os resultados calculados.

---

## Estrutura do código JavaScript

- **Input formatado:**  
  O valor do imóvel é formatado automaticamente enquanto o usuário digita, para mostrar moeda brasileira (`R$`) com separadores de milhar.

- **Função `valor_formatado`:**  
  Transforma o valor formatado em string para um número float que pode ser usado nos cálculos.

- **Função `simular`:**  
  Realiza as validações de entrada e calcula os valores financeiros, atualizando o conteúdo do card com os resultados formatados.

---

## Exemplo de uso

- Valor do imóvel: `R$ 500.000,00`
- Percentual de entrada: `10`
- Tempo do contrato: `3` anos

Resultados:

- Valor de entrada: R$ 50.000,00  
- Valor a financiar: R$ 450.000,00  
- Total a guardar: R$ 75.000,00  
- Valor mensal a guardar: R$ 2.083,33  

---

Este foi um projeto desafiador no meu processo, mas me sinto satisfeito até o momento. Sei que tenho muitos pontos a melhorar, mas com estudos e tempo “codando”, 
sei que vou me desenvolver e aprimorar cada vez mais o meu código.
