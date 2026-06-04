---
title: List.Reverse
---

# List.Reverse


Inverteix l'ordre dels valors de la llista.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Retorna una llista amb els valors de la llista `list` en l'ordre invers.


## Examples

### Example #1
Crea una llista a partir de \{1..10\} en l'ordre invers.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
