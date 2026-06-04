---
title: List.RemoveLastN
---

# List.RemoveLastN


Vráti zoznam, ktorý odstráni stanovený počet prvkov z konca zoznamu.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vráti zoznam, ktorý odstráni posledné prvky v počte `countOrCondition` z konca zoznamu `list`. Ak `list` obsahuje menej ako počet prvkov `countOrCondition` , vráti sa prázdny zoznam.

-   Ak je zadané číslo, odstráni sa maximálne tento počet položiek.
-   Ak je zadaná podmienka, odstránia sa všetky po sebe nasledujúce zodpovedajúce položky na konci `list`.
-   Ak má tento parameter hodnotu null, odstráni sa len jedna položka.


## Examples

### Example #1
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5\} bez posledných 3 čísel.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Vytvorte zoznam zo zoznamu \{5, 4, 2, 6, 4\}, ktorý končí číslom menším ako 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
