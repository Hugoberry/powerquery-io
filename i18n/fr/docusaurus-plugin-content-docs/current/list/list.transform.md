---
title: List.Transform
---

# List.Transform


Retourne une liste de valeurs calculées à partir de cette liste.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Retourne une nouvelle liste de valeurs en appliquant la fonction de transformation <code>transform</code> à la liste, <code>list</code>.


## Examples

### Example #1 
Ajoute 1 à chaque valeur dans la liste \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
