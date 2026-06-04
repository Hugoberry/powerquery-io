---
title: List.Numbers
---

# List.Numbers


Vráti zoznam čísel s danou počiatočnou hodnotou, počtom a voliteľnou hodnotou prírastku.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Vráti zoznam čísel s danou počiatočnou hodnotou, počtom a voliteľnou hodnotou prírastku. Predvolená hodnota prírastku je 1.

-   `start`: Počiatočná hodnota v zozname.
-   `count`: Počet hodnôt, ktoré sa majú vytvoriť.
-   `increment`: *(Voliteľné)* Hodnota, o ktorú sa má zvyšovať. Ak je táto hodnota vynechaná, k hodnotám sa pripočíta prírastok s hodnotou 1.


## Examples

### Example #1
Vygenerujte zoznam 10 po sebe nasledujúcich čísel, počnúc od čísla 1.
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
Vygenerujte zoznam 10 čísel, počnúc od čísla 1, s prírastkom s hodnotou 2 pre každé nasledujúce číslo.
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
