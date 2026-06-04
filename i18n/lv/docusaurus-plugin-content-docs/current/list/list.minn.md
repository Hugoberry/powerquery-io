---
title: List.MinN
---

# List.MinN


Tiek atgriezta(-s) saraksta minimālā(-s) vērtība(-s). Varat norādīt atgriežamo vērtību skaitu vai filtrēšanas nosacījumu.


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

Atgriež saraksta `list` minimālo(-ās) vērtību(-as). Izmantojot parametru `countOrCondition`, tiek norādīts atgriežamo vērtību skaits vai filtrēšanas nosacījums. Izmantojot papildu parametru `comparisonCriteria`, tiek norādīts saraksta vērtību salīdzināšanas veids.

-   `list`
: vērtību saraksts.-   `countOrCondition`: ja ir norādīts skaitlis, tiek atgriezts augošā secībā sakārtotu vienumu saraksts, kura ierakstu skaits nepārsniedz `countOrCondition` vērtību. Ja ir norādīts nosacījums, tiek atgriezts to vienumu saraksts, kas sākotnēji atbilst nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti. Ja šī parametra vērtība ir Null, tiek atgriezta saraksta mazākā vērtība.
-   `comparisonCriteria`: *(Neobligāti)* varat norādīt papildu `comparisonCriteria` vērtību, lai noteiktu saraksta vienumu salīdzināšanas veidu. Ja šī parametra vērtība ir Null, tiek lietota noklusējuma salīdzināšana.


## Examples

### Example #1
Iegūstiet saraksta `{3, 4, 5, -1, 7, 8, 2}` 5 mazākās vērtības.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
