---
title: List.Reverse
---

# List.Reverse


Inverte l&#39;ordine dei valori dell&#39;elenco.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Restituisce un elenco con i valori dell'elenco <code>list</code> in ordine inverso.


## Examples

### Example #1 
Creare un elenco da \{1..10} in ordine inverso.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
