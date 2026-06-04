---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Vráti zoznam, ktorý vynechá stanovený počet prvkov na začiatku zoznamu.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vráti zoznam, ktorý odstráni prvý prvok zoznamu `list`. Ak je `list` prázdny zoznam, vráti sa prázdny zoznam. Táto funkcia použije voliteľný parameter `countOrCondition` na podporu odstránenia viacerých hodnôt, ako je uvedené nižšie.

-   Ak je zadané číslo, odstráni sa maximálne tento počet položiek.
-   Ak je zadaná podmienka, odstránia sa všetky po sebe nasledujúce zodpovedajúce položky na začiatku `list`.
-   Ak má tento parameter hodnotu null, zistí sa predvolené správanie.


## Examples

### Example #1
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5\} bez prvých 3 čísel.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Vytvorte zoznam zo zoznamu \{5, 4, 2, 6, 1\}, ktorý začína číslom menším ako 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
