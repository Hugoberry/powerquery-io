---
title: List.Repeat
---

# List.Repeat


Retourne une liste qui contient un certain nombre de répétitions de la liste d&#39;origine.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Retourne une liste qui contient <code>count</code> répétitions de la liste d'origine, <code>list</code>.


## Examples

### Example #1 
Crée une liste qui contient \{1, 2} répété 3 fois.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
