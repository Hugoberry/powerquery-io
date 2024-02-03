---
title: List.PositionOf
---

# List.PositionOf


## Description

Devolve o(s) desprazamento(s) dun valor da lista.


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

Devolve o desprazamento no que aparece o valor <code>value</code> na lista <code>list</code>. Devolve -1 se o valor non aparece.    Tamén se pode especificar un parámetro de ocorrencia opcional, <code>occurrence</code>.<ul>   <li><code>occurrence</code>: o número máximo de ocorrencias que se van notificar.</li></ul>


## Examples

### Example #1 
Buscar a posición na lista \{1, 2, 3} na que aparece o valor 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
