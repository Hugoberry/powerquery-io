---
title: List.Min
---

# List.Min


## Description

Retourne la valeur minimale ou la valeur par défaut pour une liste vide.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Retourne l'élément minimal dans la liste <code>list</code>, ou la valeur par défaut facultative <code>default</code>, si la liste est vide.    La valeur comparisonCriteria facultative, <code>comparisonCriteria</code>, peut être spécifiée pour déterminer comment comparer les éléments dans la liste. Si ce paramètre a la valeur null, le comparateur par défaut est utilisé.


## Examples

### Example #1 
Recherche la valeur minimale dans la liste \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Recherche la valeur minimale dans la liste \{} ou retourne -1 si elle est vide. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
