---
title: List.MinN
---

# List.MinN


Vráti minimálne hodnoty v zozname. Možno stanoviť počet hodnôt, ktoré sa majú vrátiť, alebo podmienku filtrovania.


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

Vráti minimálnu hodnotu alebo hodnoty v zozname, `list`. Parameter `countOrCondition` určuje počet hodnôt, ktoré sa majú vrátiť, alebo podmienku filtrovania. Voliteľný parameter `comparisonCriteria` určuje spôsob porovnania hodnôt v zozname.

-   `list`: Zoznam hodnôt.
-   `countOrCondition`: Ak je zadané číslo, vráti sa zoznam maximálne `countOrCondition` položiek vo vzostupnom poradí. Ak je stanovená podmienka, vráti sa zoznam položiek, ktoré spočiatku spĺňajú danú podmienku. Ak nejaká položka podmienku nesplní, ďalej sa už položky nezvážajú. Ak je tento parameter null, vráti sa jedna najmenšia hodnota v zozname.
-   `comparisonCriteria`: *(Voliteľné)* Na určenie spôsobu porovnania položiek v zozname možno zadať voliteľnú hodnotu `comparisonCriteria`. Ak je tento parameter null, použije sa predvolený porovnávač.


## Examples

### Example #1
Nájdite 5 najmenších hodnôt v zozname `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
