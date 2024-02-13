---
title: List.PositionOf
---

# List.PositionOf


Retourne les décalages d&#39;une valeur dans une liste.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Retourne le décalage auquel la valeur <code>value</code> apparaît dans la liste <code>list</code>. Retourne -1 si la valeur n'apparaît pas.    Un paramètre d'occurrence facultatif, <code>occurrence</code>, peut être spécifié.<ul>   <li><code>occurrence</code> : nombre maximal d'occurrences à signaler.</li></ul>


## Examples

### Example #1 
Recherche la position dans la liste \{1, 2, 3} à laquelle la valeur 3 apparaît.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
