---
title: List.ContainsAny
---

# List.ContainsAny


Nurodoma, ar sąraše yra kokių nors kito sąrašo reikšmių.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Nurodoma, ar sąraše yra kokių nors kito sąrašo reikšmių. Pateikiama `teisinga`, jei reikšmės randamos sąraše; kitu atveju pateikiama `klaidinga`.

-   `list`: sąrašas, kuriame ieškoti.
-   `values`: reikšmių, kurių reikia ieškoti pirmame sąraše, sąrašas.
-   `equationCriteria`: (pasirinktinai) lyginimo funkcija, naudojama nustatyti, ar dvi reikšmės yra lygios.


## Examples

### Example #1
Nustatykite, ar sąraše \{1, 2, 3, 4, 5\} yra 3 arba 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Nustatykite, ar sąraše \{1, 2, 3, 4, 5\} yra 6 ir 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Nustatykite, ar sąraše yra arklys ir pelėda, nepaisydami didžiųjų ir mažųjų raidžių.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Nustatykite, ar sąraše yra 2022 m. balandžio 8 d. arba 2021 m. sausio 12 d. data.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
