---
title: List.PositionOf
---

# List.PositionOf


Pateikia sąrašo reikšmės poslinkį (-ius).


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Pateikia poslinkį, kuriuo nurodyta reikšmė pasirodo sąraše. Pateikia -1, jei reikšmė nepasirodo.

-   `list`: sąrašas, kuriame ieškoti.
-   `value`: reikšmė, kurią reikia rasti sąraše.
-   `occurrence`: (pasirinktinai) konkretus pasikartojimas, apie kurį reikia pranešti. Ši reikšmė gali būti `Occurrence.First`, `Occurrence.Last` arba `Occurrence.All`. Jei jokio `occurrence` nenurodoma, `Occurrence.First` naudojama.
-   `equationCriteria`: (pasirinktinai) nurodo, kaip nustatoma lygybė lyginant reikšmes. Šis parametras gali būti klavišų pasirinkimo funkcija, lyginimo funkcija arba sąrašas, kuriame yra tiek klavišų pasirinkimo funkcija, tiek lyginimo funkcija.


## Examples

### Example #1
Sąraše \{1, 2, 3\} raskite padėtį, kurioje rodoma reikšmė 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Raskite poziciją visų datų nuo 2022 m. egzempliorių sąraše.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Raskite paskutinio žodžio „dog“ pasirodymo vietą sąraše, nekreipiant dėmesio į didžiąsias ir mažąsias raides.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Raskite poziciją sąraše, kuris yra dviejuose skaičiaus 28 vienetuose.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
