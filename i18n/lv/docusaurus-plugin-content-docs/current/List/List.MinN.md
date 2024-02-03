---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Atgriež saraksta <code>list</code> minimālo(-ās) vērtību(-as).    Izmantojot parametru <code>countOrCondition</code>, tiek norādīts atgriežamo vērtību skaits vai filtrēšanas nosacījums. Izmantojot papildu parametru <code>comparisonCriteria</code>, tiek norādīts saraksta vērtību salīdzināšanas veids. <ul>        <li> <code>list</code>: vērtību saraksts.</li>        <li> <code>countOrCondition</code>: ja ir norādīts skaitlis, tiek atgriezts augošā secībā sakārtotu vienumu saraksts, kura ierakstu skaits nepārsniedz <code>countOrCondition</code> vērtību. Ja ir norādīts nosacījums, tiek atgriezts to vienumu saraksts, kas sākotnēji atbilst nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti. Ja šī parametra vērtība ir Null, tiek atgriezta saraksta mazākā vērtība.</li><li><code>comparisonCriteria</code>: <i>[Neobligāti]</i> varat norādīt papildu <code>comparisonCriteria</code> vērtību, lai noteiktu saraksta vienumu salīdzināšanas veidu. Ja šī parametra vērtība ir Null, tiek lietota noklusējuma salīdzināšana. </li></ul>


## Examples

### Example #1 
Iegūstiet saraksta &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; 5 mazākās vērtības.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
