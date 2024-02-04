---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Devolve o primeiro desvio de um valor numa lista.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Devolve o desvio na lista <code>list</code> da primeira ocorrência de um valor numa lista <code>values</code>. Devolve -1 se não for encontrada nenhuma ocorrência.    É possível especificar um parâmetro de ocorrência opcional <code>occurrence</code>.<ul>   <li><code>occurrence</code>: o número máximo de ocorrências que podem ser devolvidas.</li></ul>


## Examples

### Example #1 
Determinar a primeira posição na lista \{1, 2, 3} em que o valor 2 ou 3 aparece.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
