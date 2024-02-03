---
title: List.MaxN
---

# List.MaxN


## Description

Vrne največje vrednosti na seznamu. Navesti je treba število vrednosti, ki bodo vrnjene, ali pogoj filtriranja.


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

Vrne največje vrednosti na seznamu, <code>list</code>. ko so vrstice razvrščene, lahko izberete izbirne parametre za nadaljnje filtriranje rezultata. Izbirni parameter <code>countOrCondition</code> določa število vrnjenih vrednosti ali pogoj filtriranja. Izbirni parameter <code>comparisonCriteria</code> določa način primerjave vrednosti na seznamu. <ul> <li> <code>list</code>: Seznam vrednosti.</li> <li> <code>countOrCondition</code>: Če je določeno število, je vrnjen seznam največ <code>countOrCondition</code> elementov v naraščajočem vrstnem redu. Če je določen pogoj, je vrnjen seznam elementov, ki prvotno izpolnjujejo pogoj. Ko element ne uspe, se obravnava noben element.</li><li><code>comparisonCriteria</code>: <i>[Izbirno]</i> Določite lahko izbirno vrednost <code>comparisonCriteria</code>, da določite način primerjave elementov na seznamu. Če je vrednost tega parametra ničelna, je uporabljen privzeti primerjalnik. </li></ul>



## Category
List.Ordering
