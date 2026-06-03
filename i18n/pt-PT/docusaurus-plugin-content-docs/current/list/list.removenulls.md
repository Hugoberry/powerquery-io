---
title: List.RemoveNulls
---

# List.RemoveNulls


Remove todos os valores "null" da lista especificada.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Remove todas as ocorrências de valores "null" em `list`. Se não existirem valores "null" na lista, é devolvida a lista original.


## Examples

### Example #1
Remove todos os valores "null" da lista \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
