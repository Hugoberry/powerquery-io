---
title: List.FirstN
---

# List.FirstN


## Description

Vráti prvú množinu položiek v zozname stanovením počtu položiek, ktoré sa majú vrátiť, alebo oprávňujúcej podmienky.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Ak je stanovený počet, vráti sa najviac toľko položiek. </li>  <li>Ak je stanovená podmienka, vrátia sa všetky položky, ktoré pôvodne spĺňali podmienku. Keď niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. </li> </ul>


## Examples

### Example #1 
Nájdite počiatočné hodnoty v zozname \{3, 4, 5, -1, 7, 8, 2}, ktoré sú väčšie ako 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
