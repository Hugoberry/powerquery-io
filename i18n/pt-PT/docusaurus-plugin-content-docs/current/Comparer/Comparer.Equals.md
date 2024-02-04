---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Devolve um valor lógico baseado na verificação de igualdade dos dois valores apresentados.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Devolve um valor <code>lógico</code> baseado na verificação de igualdade dos dois valores apresentados, <code>x</code> e <code>y</code>, utilizando o <code>comparer</code> fornecido.      <div>        <code>comparer</code> é um <code>Comparador</code> utilizado no controlo da comparação.        Um comparador é uma função que aceita dois argumentos e devolve -1, 0 ou 1, com base no facto de o primeiro valor ser menor, igual ou superior ao segundo.        Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas e minúsculas ou baseadas na cultura ou na região.      </div>      <div>        Os comparadores incorporados seguintes estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparador.Ordinal</code>: utilizado para executar uma comparação ordinal exata</li>        <li><code>Comparador.OrdinalIgnoreCase</code>: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas</li>        <li> <code>Comparer.FromCulture</code>: utilizado para executar uma comparação baseada na cultura</li>      </ul>


## Examples

### Example #1 
Comparar &#34;1&#34; e &#34;A&#34; com a região &#34;pt-PT&#34; para determinar se os valores são iguais.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
