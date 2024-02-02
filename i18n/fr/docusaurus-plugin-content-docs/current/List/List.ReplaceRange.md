---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Remplace le nombre de comptages de valeurs à partir de la position avec les valeurs de remplacement.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Remplace les valeurs <code>count</code> dans <code>list</code> par la liste <code>replaceWith</code>, démarrant à la position spécifiée, <code>index</code>.


## Examples

### Example #1 
Remplace \{7, 8, 9} dans la liste \{1, 2, 7, 8, 9, 5} par \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
