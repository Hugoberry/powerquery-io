---
title: List.MinN
---

# List.MinN


Vrne najmanjše vrednosti na seznamu. Navedeno je lahko število vrednosti, ki bodo vrnjene, ali pogoj filtriranja.


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

Vrne najmanjše vrednosti na seznamu `list`. Parameter `countOrCondition` določa število vrednosti, ki bodo vrnjene, ali pogoj filtriranja. Izbirni parameter `comparisonCriteria` določa način primerjave vrednosti na seznamu.

-   `list`: seznam vrednosti.
-   `countOrCondition`: če je navedeno število, je vrnjen seznam v naraščajočem vrstnem redu z največ toliko elementi: `countOrCondition`. Če je podan pogoj, je vrnjen seznam elementov, ki prvotno izpolnjujejo pogoj. Ko določen element ne izpolnjuje več pogoja, se nadaljnji elementi ne upoštevajo. Če je ta parameter ničeln, je vrnjena ena najmanjša vrednost na seznamu.
-   `comparisonCriteria`: *(Izbirno)* Z izbirno vrednostjo `comparisonCriteria` je mogoče določiti način primerjave elementov na seznamu. Če je ta parameter ničeln, se uporabi privzeti primerjalnik.


## Examples

### Example #1
Poiščite 5 najmanjših vrednosti na seznamu `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
