---
title: List.Reverse
---

# List.Reverse


Inverte a orde dos valores da lista.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Devolve unha lista cos valores da lista `list` en orde inversa.


## Examples

### Example #1
Crear unha lista de \{1..10\} en orde inversa.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
