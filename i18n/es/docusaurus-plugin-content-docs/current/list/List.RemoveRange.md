---
title: List.RemoveRange
---

# List.RemoveRange


Quita el número de recuento de valores a partir de la posición especificada.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Quita los valores <code>count</code> de <code>list</code> a partir de la posición especificada, <code>index</code>.


## Examples

### Example #1 
Quitar 3 valores de la lista \{1, 2, 3, 4, -6, -2, -1, 5} a partir del índice 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
