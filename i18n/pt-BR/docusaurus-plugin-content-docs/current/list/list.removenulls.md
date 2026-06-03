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

Remove todas as ocorrências de valores "null" na `list`. Se não houver valores 'null' na lista, a lista original será retornada.


## Examples

### Example #1
Remova os valores "null" na lista \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
