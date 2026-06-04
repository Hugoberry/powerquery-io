---
title: List.Contains
---

# List.Contains


Navodi da li lista sadrži vrednost.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Označava da li lista sadrži navedenu vrednost. Vraća vrednost `true` ako se vrednost pronađe u listi, u suprotnom vraća vrednost `false`.

-   `list`: Lista koja se pretražuje.
-   `value`: Vrednost koja se traži u listi.
-   `equationCriteria`: (Opcionalno) Upoređivač koji se koristi kako bi se utvrdilo da li su dve vrednosti jednake.


## Examples

### Example #1
Odredite da li lista \{1, 2, 3, 4, 5\} sadrži 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Odredite da li lista \{1, 2, 3, 4, 5\} sadrži 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Zanemarujući mala i velika slova, pronađite da li lista sadrži reč „rhubarb“.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Odredite da li lista sadrži datum 8. aprila 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
