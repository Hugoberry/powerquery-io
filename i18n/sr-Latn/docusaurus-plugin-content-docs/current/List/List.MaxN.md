---
title: List.MaxN
---

# List.MaxN


## Description

Vraća maksimalne vrednosti sa liste. Mora se navesti broj vrednosti koje treba vratiti ili uslov za filtriranje.


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

Vraća maksimalne vrednosti sa liste, <code>list</code>.    Nakon sortiranja redova se mogu navesti opcionalni parametri da bi se rezultat dodatno filtrirao. Opcionalni parametar, <code>countOrCondition</code>, navodi broj vrednosti koje treba vratiti ili uslov za filtriranje. Opcionalni parametar, <code>comparisonCriteria</code>, navodi kako treba porediti vrednosti sa liste. <ul>        <li> <code>list</code>: Lista vrednosti.</li>        <li> <code>countOrCondition</code>:  Ako se navede broj, vraća se lista od najviše <code>countOrCondition</code> stavki po rastućem redosledu. Ako se navede uslov, vraća se lista stavki koje inicijalno zadovoljavaju taj uslov. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir.</li><li><code>comparisonCriteria</code>: <i>[Opcionalno]</i> Može se navesti opcionalna vrednost <code>comparisonCriteria</code> da bi se odredilo kako će se porediti stavke sa liste. Ako je ovaj parametar bez vrednosti, koristi se podrazumevani upoređivač. </li></ul>



## Category
List.Ordering
