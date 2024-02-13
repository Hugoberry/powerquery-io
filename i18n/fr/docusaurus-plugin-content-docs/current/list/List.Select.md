---
title: List.Select
---

# List.Select


Retourne une liste de valeurs qui correspondent à la condition.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Retourne une liste de valeurs à partir de la liste <code>list</code>, qui correspondent à la condition de sélection <code>selection</code>.


## Examples

### Example #1 
Recherche les valeurs dans la liste \{1, -3, 4, 9, -2} qui sont supérieures à 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
