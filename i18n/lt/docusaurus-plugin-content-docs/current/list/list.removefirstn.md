---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Pateikiamas sąrašas, kurio pradžioje praleistas nurodytas elementų skaičius.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Pateikiamas sąrašas, kuriame pašalintas pirmasis sąrašo `list` elementas. Jei `list` yra tuščias sąrašas, pateikiamas tuščias sąrašas. Ši funkcija naudoja pasirinktinį parametrą, `countOrCondition`, kad palaikytų kelių reikšmių šalinimą, kaip nurodyta toliau.

-   Jei nurodytas skaičius, pašalinama iki tiek elementų.
-   Jei nurodyta sąlyga, visi iš eilės atitinkantys elementai pradžioje pašalinami `list`.
-   Jei šis parametras neapibrėžtas, pastebimas numatytasis veikimas.


## Examples

### Example #1
Kurkite sąrašą iš \{1, 2, 3, 4, 5\} be pirmųjų 3 skaičių.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Kurkite sąrašą iš \{5, 4, 2, 6, 1\}, prasidedantį skaičiumi, mažesniu nei 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
