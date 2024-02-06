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

Retourne les valeurs minimales dans la liste, <code>list</code>.    Le paramètre <code>countOrCondition</code> spécifie le nombre de valeurs à retourner ou une condition de filtrage. Le paramètre facultatif, <code>comparisonCriteria</code>, spécifie comment comparer les valeurs dans la liste. <ul>        <li> <code>list</code>: liste des valeurs.</li>        <li> <code>countOrCondition</code>: si un nombre est spécifié, une liste de <code>countOrCondition</code> éléments au maximum par ordre ascendant est retournée. Si une condition est spécifiée, la liste des éléments qui satisfont initialement la condition est retournée. Quand un élément ne remplit pas la condition, aucun autre élément n'est pris en compte. Si ce paramètre a la valeur null, la valeur unique la plus petite dans la liste est retournée.</li><li><code>comparisonCriteria</code> : <i>[Facultatif]</i> une valeur <code>comparisonCriteria</code> facultative peut être spécifiée pour déterminer comment comparer les éléments dans la liste. Si ce paramètre a la valeur null, le comparateur par défaut est utilisé. </li></ul>


## Examples

### Example #1 
Recherche les 5 valeurs les plus petites dans la liste &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
