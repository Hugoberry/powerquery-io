---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Vrne najmanjše vrednosti na seznamu, <code>list</code>. Parameter, <code>countOrCondition</code>, določa število vrednosti, ki bodo vrnjene, ali pogoj filtriranja. Izbirni parameter <code>comparisonCriteria</code>, določa, kako primerjate vrednosti na seznamu. <ul> <li> <code>list</code>: Seznam vrednosti.</li> <li> <code>countOrCondition</code>: Če je določeno število, je vrnjen seznam največ <code>countOrCondition</code> elementov v naraščajočem vrstnem redu. Če je določen pogoj, je vrnjen seznam elementov, ki prvotno izpolnjujejo pogoj. Ko element ne uspe, se obravnava noben element več. Če je ta parameter ničeln, je vrnjena ena najmanjša vrednost na seznamu.</li><li><code>comparisonCriteria</code>: <i>[Izbirno]</i> Določite lahko izbirno vrednost <code>comparisonCriteria</code>, da določite način primerjave elementov na seznamu. Če je vrednost tega parametra ničelna, je uporabljen privzeti primerjalnik. </li></ul>


## Examples

### Example #1 
Poiščite 5 najmanjših vrednosti na seznamu &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
