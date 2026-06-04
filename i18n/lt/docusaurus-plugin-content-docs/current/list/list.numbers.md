---
title: List.Numbers
---

# List.Numbers


Pateikiamas sąrašas skaičių su pradine reikšme, skaičiumi ir pasirenkama papildymo reikšme.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Pateikiamas sąrašas skaičių su pradine reikšme, skaičiumi ir pasirenkama papildymo reikšme. Numatytoji papildymo reikšmė yra 1.

-   `start`: pradinė reikšmė sąraše.
-   `count`: kurtinų reikšmių skaičius.
-   `increment`: *(pasirinktinai)* Reikšmė, pagal kurią papildoma. Jei praleistos reikšmės papildomos 1.


## Examples

### Example #1
Sugeneruokite 10 skaičių iš eilės sąrašą, pradėdami nuo 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Sugeneruokite 10 skaičių sąrašą, pradėdami nuo 1 ir kiekvienam paskesniam skaičiui naudodami papildymą 2.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
