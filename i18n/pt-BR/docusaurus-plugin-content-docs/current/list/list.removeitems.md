---
title: List.RemoveItems
---

# List.RemoveItems


Remove itens de list1 que estão presentes na lista.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Remove todas as ocorrências dos valores especificados no `list2` em `list1`. Se os valores em `list2` não existirem em `list1`, a lista original será retornada.


## Examples

### Example #1
Remova os itens na lista \{2, 4, 6\} da lista \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
