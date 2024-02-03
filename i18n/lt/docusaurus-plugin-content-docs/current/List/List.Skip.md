---
title: List.Skip
---

# List.Skip


## Description

Pateikiamas sąrašas, kurio pradžioje praleistas nurodytas elementų skaičius.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Pateikiamas sąrašas, kuriame praleidžiamas pirmasis sąrašo <code>list</code> elementas. Jei <code>list</code> yra tuščias sąrašas, pateikiamas tuščias sąrašas.Ši funkcija naudoja pasirenkamą parametrą <code>countOrCondition</code>, kad palaikytų kelių reikšmių praleidimą, kaip nurodyta toliau. <ul> <li>Jei nurodytas skaičius, praleidžiama iki tiek elementų, koks yra šis skaičius. </li> <li>Jei nurodyta sąlyga, pateiktas sąrašas prasideda pirmuoju <code>list</code> elementu, atitinkančiu kriterijus. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama. </li> <li>Jei šis parametras neapibrėžtas, nustatomas numatytasis veikimo būdas. </li> </ul>


## Examples

### Example #1 
Kurkite sąrašą iš \{1, 2, 3, 4, 5} be pirmųjų 3 skaičių.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Kurkite sąrašą iš \{5, 4, 2, 6, 1}, prasidedantį skaičiumi, mažesniu nei 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
