---
title: List.Reverse
---

# List.Reverse


Inverse l'ordre des valeurs dans la liste.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Retourne une liste avec les valeurs dans liste `list` dans l'ordre inverse.


## Examples

### Example #1
Crée une liste à partir de \{1..10\} dans l'ordre inverse.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
