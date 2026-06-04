---
title: List.RemoveRange
---

# List.RemoveRange


Elimina o número de valores de conta comezando na posición especificada.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Elimina os valores `count` na `list` comezando na posición especificada, `index`.


## Examples

### Example #1
Eliminar 3 valores da lista \{1, 2, 3, 4, -6, -2, -1, 5\} comezando no índice 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
