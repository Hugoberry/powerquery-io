---
title: List.Distinct
---

# List.Distinct


Retourne une liste de valeurs avec des doublons supprimés.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourne une liste contenant toutes les valeurs dans la liste <code>list</code> avec les doublons supprimés. Si la liste est vide, le résultat est une liste vide.


## Examples

### Example #1 
Supprimer les doublons dans la liste \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
