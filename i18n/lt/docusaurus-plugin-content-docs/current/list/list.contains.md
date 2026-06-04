---
title: List.Contains
---

# List.Contains


Nurodoma, ar sąraše yra reikšmė.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Nurodoma, ar sąraše yra nurodyta reikšmė. Pateikiama `teisinga`, jei reikšmė randama sąraše; kitu atveju pateikiama `klaidinga`.

-   `list`: sąrašas, kuriame ieškoti.
-   `value`: reikšmė, kurios ieškoti sąraše.
-   `equationCriteria`: (pasirinktinai) lyginimo funkcija, naudojama nustatyti, ar dvi reikšmės yra lygios.


## Examples

### Example #1
Nustatykite, ar sąraše \{1, 2, 3, 4, 5\} yra 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Nustatykite, ar sąraše \{1, 2, 3, 4, 5\} yra 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Nepaisydami didžiųjų ir mažųjų raidžių nustatykite, ar sąraše yra „rabarbaras“.
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
Nustatykite, ar sąraše yra 2022 m. balandžio 8 d. data.
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
