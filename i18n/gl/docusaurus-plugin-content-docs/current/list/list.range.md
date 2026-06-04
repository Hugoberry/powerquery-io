---
title: List.Range
---

# List.Range


Devolve un subconxunto da lista comezando nun desprazamento.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Devolve un subconxunto de `list` comezando por `offset`. Un parámetro opcional, `count`, establece o número máximo de elementos no subconxunto.


## Examples

### Example #1
Buscar o subconxunto, comezando no desprazamento 6, da lista de números de 1 a 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Buscar o subconxunto de lonxitude 2 dende o desprazamento 6, da lista de números de 1 a 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
