---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Devolve uma função de comparador não sensível a maiúsculas/minúsculas que utiliza regras Ordinais para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Devolve uma função de comparador não sensível a maiúsculas e minúsculas, que utiliza regras Ordinais para comparar os valores fornecidos <code>x</code> e <code>y</code>.<br />        <br />        Uma função de comparação aceita dois argumentos e devolve -1, 0 ou 1, com base no facto de o primeiro valor ser menor, igual ou superior ao segundo.    


## Examples

### Example #1 
Utilize as regras Ordinais não sensíveis a maiúsculas/minúsculas e compare &#34;Abc&#34; com &#34;abc&#34;. Tenha em atenção que &#34;Abc&#34; é menor que &#34;abc&#34; quando utiliza &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
