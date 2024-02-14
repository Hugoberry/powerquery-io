---
title: List.RemoveItems
---

# List.RemoveItems


Remove itens de lista1 que estejam presentes na lista.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Remove todas as ocorrências dos valores especificados em <code>list2</code> a partir de <code>list1</code>. Se os valores existentes em <code>list2</code> não existirem em <code>list1</code>, é devolvida a lista original.


## Examples

### Example #1 
Remove os itens existentes na lista \{2, 4, 6} da lista \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
