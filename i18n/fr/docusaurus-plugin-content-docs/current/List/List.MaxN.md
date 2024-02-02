---
title: List.MaxN
---

# List.MaxN


## Description

Retourne les valeurs maximales dans la liste. Le nombre de valeurs à retourner, ou une condition de filtrage, doit être spécifié.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Retourne les valeurs maximales dans la liste, <code>list</code>.    Une fois que les lignes sont triées, des paramètres facultatifs peuvent être spécifiés pour filtrer davantage le résultat. Le paramètre facultatif, <code>countOrCondition</code>, spécifie le nombre de valeurs à retourner ou une condition de filtrage. Le paramètre facultatif, <code>comparisonCriteria</code>, spécifie comment comparer les valeurs dans la liste. <ul>        <li> <code>list</code>: liste des valeurs.</li>        <li> <code>countOrCondition</code> : si un nombre est spécifié, une liste de <code>countOrCondition</code> éléments au maximum par ordre ascendant est retournée. Si une condition est spécifiée, la liste des éléments qui satisfont initialement la condition est retournée. Quand un élément ne remplit pas la condition, aucun autre élément n'est pris en compte.</li><li><code>comparisonCriteria</code> : <i>[Facultatif]</i> une valeur <code>comparisonCriteria</code> facultative peut être spécifiée pour déterminer comment comparer les éléments dans la liste. Si ce paramètre a la valeur null, le comparateur par défaut est utilisé. </li></ul>



## Category
List.Ordering
