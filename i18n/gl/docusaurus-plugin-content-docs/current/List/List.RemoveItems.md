---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Elimina os elementos de list1 que están presentes na lista.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Elimina todas as ocorrencias dos valores indicados no <code>list2</code> dende <code>list1</code>. Se os valores en <code>list2</code> non existen en <code>list1</code>, devólvese a lista orixinal.


## Examples

### Example #1 
Eliminar os elementos da lista, \{2, 4, 6} da lista \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
