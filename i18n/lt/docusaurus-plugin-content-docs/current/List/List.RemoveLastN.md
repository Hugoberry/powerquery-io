---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Pateikiamas sąrašas, kurio pabaigoje pašalintas nurodytas elementų skaičius.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Pateikiamas sąrašas, kurio pabaigoje nėra <code>countOrCondition</code> paskutinių sąrašo <code>list</code> elementų. Jei <code>list</code> yra mažiau nei <code>countOrCondition</code> element., pateikiamas tuščias sąrašas. <ul> <li>Jei nurodytas skaičius, pašalinama iki tiek elementų, koks yra šis skaičius. </li> <li>Jei nurodyta sąlyga, pateiktas sąrašas baigiasi pirmuoju nuo apačios <code>list</code> elementu, atitinkančiu kriterijus. Jei elementas neatitinka sąlygos, į tolesnius elementus neatsižvelgiama. </li> <li>Jei šis parametras neapibrėžtas, pašalinamas tik vienas elementas. </li> </ul>


## Examples

### Example #1 
Kurkite sąrašą iš \{1, 2, 3, 4, 5} be paskutinių 3 skaičių.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Kurkite sąrašą iš \{5, 4, 2, 6, 4}, kuris baigiasi skaičiumi, mažesniu nei 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
