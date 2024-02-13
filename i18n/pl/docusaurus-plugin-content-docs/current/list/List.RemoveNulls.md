---
title: List.RemoveNulls
---

# List.RemoveNulls


Usuwa wszystkie wartości „null” z określonej listy.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Usuwa wszystkie wystąpienia wartości „null” z listy <code>list</code>. Jeśli na liście nie znajdują się wartości „null”, zwracana jest oryginalna lista.


## Examples

### Example #1 
Usuń wartości „null” z listy \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
