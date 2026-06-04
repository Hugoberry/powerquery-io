---
title: List.RemoveLastN
---

# List.RemoveLastN


Pateikiamas sąrašas, kurio pabaigoje pašalintas nurodytas elementų skaičius.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Pateikiamas sąrašas, kuris pašalina paskutinius `countOrCondition` elementus iš sąrašo pabaigos `list`. Jei `list` yra mažiau nei `countOrCondition` elementų, pateikiamas tuščias sąrašas.

-   Jei nurodytas skaičius, pašalinama iki tiek elementų.
-   Jei nurodyta sąlyga, visi iš eilės atitinkantys elementai `list` pabaigoje pašalinami.
-   Jei šis parametras neapibrėžtas, pašalinamas tik vienas elementas.


## Examples

### Example #1
Kurkite sąrašą iš \{1, 2, 3, 4, 5\} be paskutinių 3 skaičių.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Kurkite sąrašą iš \{5, 4, 2, 6, 4\}, kuris baigiasi skaičiumi, mažesniu nei 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
