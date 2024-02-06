---
title: List.Median
---

# List.Median


Retourne la valeur médiane dans la liste.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Retourne l'élément médian de la liste <code>list</code>. Cette fonction retourne <code>null</code> si la liste ne contient aucune valeur non-<code>null</code>.    S'il existe un nombre pair d'éléments, la fonction choisit le plus petit des deux éléments médians, à moins que la liste ne    soit entièrement composée de dates/heures, de durées, de nombres ou d'heures. Dans ce cas, elle retourne la moyenne des deux éléments.


## Examples

### Example #1 
Recherche la valeur médiane de la liste &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
