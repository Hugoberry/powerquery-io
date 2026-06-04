---
title: List.LastN
---

# List.LastN


Grąžinamas paskutinio nurodyto sąrašo elementas arba elementų sąrašas. Galima pasirinktinai nurodyti, kiek reikšmių pateikti arba kvalifikacinę sąlygą.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Pateikiamas paskutinio nurodyto elemento sąrašas arba elementai nurodytame sąraše.

-   `list`: tikrinimui skirtas sąrašas. Jei sąrašas tuščias, pateikiamas tuščias sąrašas.
-   `countOrCondition`: (pasirinktinai) palaikomas kelių elementų arba filtravimo elementų rinkimas. Nors šis parametras nurodytas kaip pasirinktinis, įvyksta klaida, jei jis nepateikiamas arba yra `null`. Šį parametrą galima nurodyti dviem būdais:
    -   Jei nurodomas skaičius, pateikiama ne daugiau elementų nei nurodyta.
    -   Jei nurodoma sąlyga, pateikiami visi elementai, atitinkantys sąlygą, pradedant nuo sąrašo pabaigos. Kai elementas neatitinka sąlygos, tolesni elementai nebesvarstomi.


## Examples

### Example #1
Raskite paskutinę sąrašo reikšmę \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Raskite paskutines sąrašo reikšmes \{3, 4, 5, -1, 7, 8, 2\}, kurios yra didesnės už 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
