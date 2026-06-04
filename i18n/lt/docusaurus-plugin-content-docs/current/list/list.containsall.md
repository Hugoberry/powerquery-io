---
title: List.ContainsAll
---

# List.ContainsAll


Nurodoma, ar sąraše yra visos kito sąrašo reikšmės.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Nurodoma, ar sąraše yra visos kito sąrašo reikšmės. Pateikiama `teisinga`, jei visos reikšmės randamos sąraše; kitu atveju pateikiama `klaidinga`.

-   `list`: sąrašas, kuriame ieškoti.
-   `values`: reikšmių, kurių reikia ieškoti pirmame sąraše, sąrašas.
-   `equationCriteria`: (pasirinktinai) lyginimo funkcija, naudojama nustatyti, ar dvi reikšmės yra lygios.


## Examples

### Example #1
Nustatykite, ar sąraše \{1, 2, 3, 4, 5\} yra 3 ir 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Nustatykite, ar sąraše \{1, 2, 3, 4, 5\} yra 5 ir 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Nustatykite, ar sąraše yra šuo ir arklys, nepaisydami didžiųjų ir mažųjų raidžių.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Nustatykite, ar sąraše yra 2022 m. balandžio 8 d. ir 2021 m. liepos 6 d. datos.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
