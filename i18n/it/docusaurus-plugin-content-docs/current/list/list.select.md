---
title: List.Select
---

# List.Select


Restituisce un elenco di valori corrispondente alla condizione.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Restituisce un elenco di valori dall'elenco <code>list</code> corrispondente alla condizione di selezione <code>selection</code>.


## Examples

### Example #1 
Trovare i valori nell&#39;elenco \{1, -3, 4, 9, -2} che sono maggiori di 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
