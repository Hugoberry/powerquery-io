---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Vráti zoznam, ktorý odstráni stanovený počet prvkov z konca zoznamu.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vráti zoznam, ktorý odstráni posledné prvky v počte <code>countOrCondition</code> z konca zoznamu <code>list</code>. Ak zoznam <code>list</code> obsahuje menej prvkov než <code>countOrCondition</code>, vráti sa prázdny zoznam. <ul> <li>Ak je stanovený počet, odstráni sa najviac toľko položiek. </li> <li>Ak je stanovená podmienka, vrátený zoznam sa skončí prvým prvkom odspodu v zozname <code>list</code>, ktorý spĺňa požadované kritériá. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. </li> <li>Ak má tento parameter hodnotu null, odstráni sa iba jedna položka. </li> </ul>


## Examples

### Example #1 
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5} bez posledných 3 čísel.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Vytvorte zoznam zo zoznamu \{5, 4, 2, 6, 4}, ktorý končí číslom menším ako 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
