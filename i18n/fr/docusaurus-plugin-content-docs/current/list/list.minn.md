---
title: List.MinN
---

# List.MinN


Retourne les valeurs minimales dans la liste. Le nombre de valeurs à retourner, ou une condition de filtrage, peut être spécifié.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Renvoie la ou les valeurs minimales de la liste, `list`. Le paramètre `countOrCondition` spécifie le nombre de valeurs à retourner ou une condition de filtrage. Le paramètre facultatif `comparisonCriteria` spécifie la manière de comparer les valeurs de la liste.

-   `list` : La liste des valeurs.
-   `countOrCondition` : Si un nombre est spécifié, une liste comportant jusqu'à `countOrCondition` éléments, par ordre croissant, est renvoyée. Si une condition est spécifiée, une liste d'éléments satisfaisant initialement à cette condition est renvoyée. Dès qu'un élément ne satisfait pas à la condition, aucun autre élément n'est pris en considération. Si ce paramètre est nul, la plus petite valeur unique de la liste est renvoyée.
-   `comparisonCriteria` : *(Facultatif)* Une valeur facultative `comparisonCriteria` peut être spécifiée pour déterminer la manière de comparer les éléments de la liste. Si ce paramètre est nul, le comparateur par défaut est utilisé.


## Examples

### Example #1
Recherche les 5 valeurs les plus petites dans la liste `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
