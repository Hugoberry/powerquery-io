---
title: List.LastN
---

# List.LastN


## Description

Pateikiama paskutinė sąrašo reikšmė.  Galima pasirinktinai nurodyti, kiek reikšmių pateikti arba kvalifikacinę sąlygą.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Pateikiamas paskutinis sąrašo <code>list</code> elementas. Jei sąrašas tuščias, pateikiama išimtis. Ši funkcija naudoja pasirinktinį parametrą <code>countOrCondition</code>, kad būtų galima surinkti kelis elementus arba filtruoti elementus. <code>countOrCondition</code> galima nurodyti trimis būdais: <ul>  <li>Jei nurodytas skaičius, pateikiama ne daugiau elementų, nei rodo šis skaičius. </li>  <li>Jei nurodyta sąlyga, pateikiami visi elementai, kurie iš pradžių atitinka sąlygą, pradedant nuo sąrašo pabaigos. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama. </li>  <li>Jei šis parametras neapibrėžtas, pateikiamas paskutinis sąrašo elementas.</li> </ul>


## Examples

### Example #1 
Raskite paskutinę sąrašo reikšmę \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Raskite paskutines sąrašo reikšmes \{3, 4, 5, -1, 7, 8, 2}, kurios yra didesnės už 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
