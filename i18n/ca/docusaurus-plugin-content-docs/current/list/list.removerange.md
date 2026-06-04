---
title: List.RemoveRange
---

# List.RemoveRange


Suprimeix el nombre del recompte de valors començant per la posició especificada.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Suprimeix els valors `count` de `list` començant per la posició especificada, `index`.


## Examples

### Example #1
Suprimeix 3 valors de la llista \{1, 2, 3, 4, -6, -2, -1, 5\} començant per l'índex 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
