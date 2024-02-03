---
title: List.MaxN
---

# List.MaxN


## Description

Vráti maximálne hodnoty v zozname. Musí sa stanoviť počet hodnôt, ktoré sa majú vrátiť, alebo podmienka filtrovania.


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

Vráti maximálne hodnoty v zozname, <code>list</code>.    Po zoradení riadkov možno stanoviť voliteľné parametre a ďalej tak filtrovať výsledok. Voliteľný parameter <code>countOrCondition</code> určí počet hodnôt, ktoré sa majú vrátiť, alebo podmienku filtrovania. Voliteľný parameter <code>comparisonCriteria</code> určí spôsob porovnania hodnôt v zozname. <ul>        <li> <code>list</code>: Zoznam hodnôt.</li>        <li> <code>countOrCondition</code>: Ak je stanovený počet, vráti sa zoznam s najviac <code>countOrCondition</code> položkami vo vzostupnom poradí. Ak je stanovená podmienka, vráti sa zoznam položiek, ktoré pôvodne spĺňajú podmienku. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú.</li><li><code>comparisonCriteria</code>: <i>[Voliteľné]</i> Možno stanoviť voliteľnú hodnotu <code>comparisonCriteria</code> s cieľom určiť spôsob porovnania položiek v zozname. Ak má tento parameter hodnotu null, použije sa predvolený porovnávač. </li></ul>



## Category
List.Ordering
