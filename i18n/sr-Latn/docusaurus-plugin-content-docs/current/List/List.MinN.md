---
title: List.MinN
---

# List.MinN


## Description

Vraća minimalne vrednosti sa liste. Može se navesti broj vrednosti koje treba vratiti ili uslov za filtriranje.


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

Vraća minimalne vrednosti sa liste, <code>list</code>.    Parametar, <code>countOrCondition</code>, navodi broj vrednosti koje treba vratiti ili uslov za filtriranje. Opcionalni parametar, <code>comparisonCriteria</code>, navodi kako treba porediti vrednosti sa liste. <ul>        <li> <code>list</code>: Lista vrednosti.</li>        <li> <code>countOrCondition</code>: Ako se navede broj, vraća se lista od najviše <code>countOrCondition</code> stavki po rastućem redosledu. Ako se navede uslov, vraća se lista stavki koje inicijalno zadovoljavaju taj uslov. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir. Ako je ovaj parametar bez vrednosti, vraća se najmanja vrednost sa liste.</li><li><code>comparisonCriteria</code>: <i>[Opcionalno]</i> Može se navesti opcionalna vrednost <code>comparisonCriteria</code> da bi se odredilo kako će se porediti stavke sa liste. Ako je ovaj parametar bez vrednosti, koristi se podrazumevani upoređivač. </li></ul>


## Examples

### Example #1 
Pronalaženje 5 najmanjih vrednosti sa liste &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
