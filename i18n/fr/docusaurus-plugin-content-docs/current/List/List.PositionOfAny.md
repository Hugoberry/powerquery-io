---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Retourne le premier décalage d&#39;une valeur dans une liste.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Retourne le décalage dans la liste <code>list</code> de la première occurrence d'une valeur dans une liste <code>values</code>. Retourne -1 si aucune occurrence n'est trouvée.    Un paramètre d'occurrence facultatif, <code>occurrence</code>, peut être spécifié.<ul>   <li><code>occurrence</code> : nombre maximal d'occurrences pouvant être retournées.</li></ul>


## Examples

### Example #1 
Recherche la première position dans la liste \{1, 2, 3} à laquelle la valeur 2 ou 3 apparaît.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
