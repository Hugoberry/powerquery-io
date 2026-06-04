---
title: List.FirstN
---

# List.FirstN


Pateikiamas pirmasis sąrašo elementų rinkinys nurodant, kiek elementų pateikti arba kvalifikacinė sąlyga.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

-   Jei nurodytas skaičius, pateikiama ne daugiau elementų, nei rodo šis skaičius.
-   Jei nurodyta sąlyga, pateikiami visi elementai, kurie iš pradžių atitinka sąlygą. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama.


## Examples

### Example #1
Sąraše rasti pradines reikšmes \{3, 4, 5, -1, 7, 8, 2\}, kurios yra didesnės už 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
