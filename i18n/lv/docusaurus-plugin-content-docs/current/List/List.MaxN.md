---
title: List.MaxN
---

# List.MaxN


## Description

Tiek atgriezta(-s) saraksta maksimālā(-s) vērtība(-s). Ir jānorāda atgriežamo vērtību skaits vai filtrēšanas nosacījums.


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

Atgriež saraksta <code>list</code> maksimālo(-ās) vērtību(-as).    Varat norādīt papildu parametrus, lai precizētu rezultātu filtrēšanu pēc rindu sakārtošanas. Izmantojot papildu parametru <code>countOrCondition</code>, tiek norādīts atgriežamo vērtību skaits vai filtrēšanas nosacījums. Izmantojot papildu parametru <code>comparisonCriteria</code>, tiek norādīts saraksta vērtību salīdzināšanas veids. <ul>        <li> <code>list</code>: vērtību saraksts.</li>        <li> <code>countOrCondition</code>: ja ir norādīts skaitlis, tiek atgriezts augošā secībā sakārtotu vienumu saraksts, kura ierakstu skaits nepārsniedz <code>countOrCondition</code> vērtību. Ja ir norādīts nosacījums, tiek atgriezts to vienumu saraksts, kas sākotnēji atbilst nosacījumam. Ja kāds vienums neatbilst nosacījumam, nākamie vienumi netiek apstrādāti.</li><li><code>comparisonCriteria</code>: <i>[Neobligāti]</i> varat norādīt papildu <code>comparisonCriteria</code> vērtību, lai noteiktu saraksta vienumu salīdzināšanas veidu. Ja šī parametra vērtība ir Null, tiek lietota noklusējuma salīdzināšana. </li></ul>



## Category
List.Ordering
