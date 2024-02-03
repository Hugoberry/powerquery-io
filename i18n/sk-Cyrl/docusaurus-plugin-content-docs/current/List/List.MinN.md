---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Vráti minimálne hodnoty v zozname, <code>list</code>.    Parameter <code>countOrCondition</code> určí počet hodnôt, ktoré sa majú vrátiť, alebo podmienku filtrovania. Voliteľný parameter <code>comparisonCriteria</code> určí spôsob porovnania hodnôt v zozname. <ul>        <li> <code>list</code>: Zoznam hodnôt.</li>        <li> <code>countOrCondition</code>: Ak je stanovený počet, vráti sa zoznam s najviac <code>countOrCondition</code> položkami vo vzostupnom poradí. Ak je stanovená podmienka, vráti sa zoznam položiek, ktoré pôvodne spĺňajú podmienku. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. Ak má tento parameter hodnotu null, vráti sa jedna najmenšia hodnota v zozname.</li><li><code>comparisonCriteria</code>: <i>[Voliteľné]</i> Možno stanoviť voliteľnú hodnotu <code>comparisonCriteria</code> s cieľom určiť spôsob porovnania položiek v zozname. Ak má tento parameter hodnotu null, použije sa predvolený porovnávač. </li></ul>


## Examples

### Example #1 
Nájdite 5 najmenších hodnôt v zozname &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
