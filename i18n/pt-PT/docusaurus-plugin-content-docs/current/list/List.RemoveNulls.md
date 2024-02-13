---
title: List.RemoveNulls
---

# List.RemoveNulls


Remove todos os valores &#34;null&#34; da lista especificada.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Remove todas as ocorrências de valores "null" em <code>list</code>. Se não existirem valores "null" na lista, é devolvida a lista original.


## Examples

### Example #1 
Remove todos os valores &#34;null&#34; da lista \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
