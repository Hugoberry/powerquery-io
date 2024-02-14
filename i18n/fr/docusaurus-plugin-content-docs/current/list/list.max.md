---
title: List.Max
---

# List.Max


Retourne la valeur maximale ou la valeur par défaut pour une liste vide.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Retourne l'élément maximal dans la liste <code>list</code>, ou la valeur par défaut facultative <code>default</code>, si la liste est vide.    La valeur comparisonCriteria facultative, <code>comparisonCriteria</code>, peut être spécifiée pour déterminer comment comparer les éléments dans la liste. Si ce paramètre a la valeur null, le comparateur par défaut est utilisé.


## Examples

### Example #1 
Recherche la valeur maximale dans la liste \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Recherche la valeur maximale dans la liste \{} ou retourne -1 si elle est vide. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
