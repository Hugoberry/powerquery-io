---
title: List.PositionOfAny
---

# List.PositionOfAny


Pateikia pirmąjį sąrašo reikšmės poslinkį.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Pateikia poslinkį, kai elementas iš nurodyto reikšmių sąrašo rodomas sąraše. Pateikia -1, jei nepavyksta rasti jokio pasikartojimo.

-   `list`: sąrašas, kuriame ieškoti.
-   `values`: reikšmių, kurias reikia rasti pradiniame sąraše, sąrašas.
-   `occurrence`: (pasirinktinai) konkretus pasikartojimas, apie kurį reikia pranešti. Ši reikšmė gali būti `Occurrence.First`, `Occurrence.Last` arba `Occurrence.All`. Jei jokio `occurrence` nenurodoma, `Occurrence.First` naudojama.
-   `equationCriteria`: (pasirinktinai) nurodo, kaip nustatoma lygybė lyginant reikšmes. Šis parametras gali būti klavišų pasirinkimo funkcija, lyginimo funkcija arba sąrašas, kuriame yra tiek klavišų pasirinkimo funkcija, tiek lyginimo funkcija.


## Examples

### Example #1
Sąraše \{1, 2, 3\} raskite pirmąją padėtį, kurioje rodoma reikšmė 2 arba 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Raskite vietą visų datų egzempliorių sąraše nuo 2022 m. arba 2023 m.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Raskite paskutinio žodžio „šuo“ arba „katė“ pasirodymo poziciją sąraše, nekreipiant dėmesio į didžiąsias ir mažąsias raides.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
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
Sąraše raskite bet kokią padėtį, esančią dviejuose skaičiaus 17 arba 28 vienetuose.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
