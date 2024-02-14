---
title: List.PositionOf
---

# List.PositionOf


Retorna os deslocamentos de um valor em uma lista.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Retorna o deslocamento em que o valor <code>value</code> aparece na lista <code>list</code>. Retorna -1 caso o valor não apareça.    Um parâmetro de ocorrência <code>occurrence</code> opcional pode ser especificado.<ul>   <li><code>occurrence</code>: o número máximo de ocorrências para o relatório.</li></ul>


## Examples

### Example #1 
Localize a posição na lista \{1, 2, 3} em que o valor 3 aparece.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
