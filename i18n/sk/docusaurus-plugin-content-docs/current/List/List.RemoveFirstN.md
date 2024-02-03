---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Vráti zoznam, ktorý vynechá stanovený počet prvkov na začiatku zoznamu.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vráti zoznam, ktorý odstráni prvý prvok zoznamu <code>list</code>. Ak je zoznam <code>list</code> prázdny, vráti sa prázdny zoznam.Táto funkcia použije voliteľný parameter <code>countOrCondition</code> na podporu odstránenia viacerých hodnôt, ako je uvedené nižšie. <ul> <li>Ak je stanovený počet, odstráni sa najviac toľko položiek. </li> <li>Ak je stanovená podmienka, vrátený zoznam sa začne prvým prvkom v zozname <code>list</code>, ktorý spĺňa požadované kritériá. Hneď ako niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. </li> <li>Ak má tento parameter hodnotu null, spozoruje sa predvolené správanie. </li> </ul>


## Examples

### Example #1 
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5} bez prvých 3 čísel.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Vytvorte zoznam zo zoznamu \{5, 4, 2, 6, 1}, ktorý začína číslom menším ako 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
