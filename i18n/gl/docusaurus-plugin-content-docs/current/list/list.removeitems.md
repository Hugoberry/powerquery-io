---
title: List.RemoveItems
---

# List.RemoveItems


Elimina os elementos de list1 que están presentes na lista.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Elimina todas as ocorrencias dos valores indicados no `list2` dende `list1`. Se os valores en `list2` non existen en `list1`, devólvese a lista orixinal.


## Examples

### Example #1
Eliminar os elementos da lista, \{2, 4, 6\} da lista \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
