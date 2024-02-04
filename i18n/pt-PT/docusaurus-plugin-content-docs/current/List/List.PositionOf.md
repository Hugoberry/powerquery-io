---
title: List.PositionOf
---

# List.PositionOf


## Description

Devolve o(s) desvio(s) de um valor numa lista.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Devolve o desvio em que o valor <code>value</code> aparece na lista <code>list</code>. Devolve -1 se o valor não aparecer.    É possível especificar um parâmetro de ocorrência opcional <code>occurrence</code>.<ul>   <li><code>occurrence</code>: o número máximo de ocorrências a comunicar.</li></ul>


## Examples

### Example #1 
Determinar a posição na lista \{1, 2, 3} em que o valor 3 aparece.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
