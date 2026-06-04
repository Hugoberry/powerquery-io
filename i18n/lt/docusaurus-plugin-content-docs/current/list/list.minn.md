---
title: List.MinN
---

# List.MinN


Pateikiama (-os) mažiausia (-ios) sąrašo reikšmė (-ės). Gali būti nurodomas pateiktinų reikšmių skaičius arba filtravimo sąlyga.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Pateikiamos mažiausia (-ios) sąrašo reikšmė (-ės) (`list`). `countOrCondition` parametras nurodo pateiktinų reikšmių skaičių arba filtravimo sąlygą. Pasirenkamas parametras `comparisonCriteria` nurodo, kaip palyginti sąrašo reikšmes.

-   `list`: reikšmių sąrašas.
-   `countOrCondition`: jei nurodytas skaičius, didėjimo tvarka pateikiamas sąrašas, kurį sudaro iki `countOrCondition` elementų. Jei nurodyta sąlyga, pateikiamas sąrašas elementų, kurie iš pradžių atitiko sąlygą. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama. Jei šis parametras neapibrėžtas, pateikiama viena mažiausia sąrašo reikšmė.
-   `comparisonCriteria`: *(pasirenkama)* Pasirenkama `comparisonCriteria` reikšmė gali būti nurodyta norint nustatyti, kaip palyginti sąrašo elementus. Jei šis parametras neapibrėžtas, naudojama numatytoji lyginimo funkcija.


## Examples

### Example #1
Raskite 5 mažiausias reikšmes sąraše `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
