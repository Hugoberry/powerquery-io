---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Supprime le nombre de comptage des valeurs démarrant à la position spécifiée.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Supprime les valeurs <code>count</code> dans <code>list</code> démarrant à la position spécifiée, <code>index</code>.


## Examples

### Example #1 
Supprime 3 valeurs dans la liste \{1, 2, 3, 4, -6, -2, -1, 5} en commençant à l&#39;index 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
