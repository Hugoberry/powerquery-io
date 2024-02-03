---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Retorna um valor lógico baseado na verificação de igualdade sobre os dois valores fornecidos.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Retorna um valor <code>logical</code> com base na verificação de igualdade dos dois valores fornecidos, <code>x</code> e <code>y</code>, usando o <code>x</code> fornecido<code>comparer</code>.      <div>        <code>comparer</code> é um <code>Comparer</code> que é usado para controlar a comparação.        Um comparador é uma função que aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.        Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.      </div>      <div>        Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: usado para realizar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: usado para realizar uma comparação de reconhecimento de cultura</li>      </ul>


## Examples

### Example #1 
Comparar &#34;1&#34; e &#34;A&#34; usando a localidade &#34;pt-BR&#34; para determinar se os valores são iguais.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
