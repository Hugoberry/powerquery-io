---
title: List.PositionOf
---

# List.PositionOf


Тізімдегі мәннің ауытқу(лар)ын қайтарады.


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

Көрсетілген мән тізімде пайда болатын жылжытуды қайтарады. Мән пайда болмаса, -1 қайтарады.

-   `list`: Іздеуге арналған тізім.
-   `value`: Тізімде табуға болатын мән.
-   `occurrence`: (Міндетті емес) Хабарлау керек нақты оқиға. Бұл мән `Occurrence.First`, `Occurrence.Last` немесе `Occurrence.All` бола алады. Ешқандай `occurrence` көрсетілмесе, `Occurrence.First` мәні қолданылады.
-   `equationCriteria`: (Міндетті емес) Мәндерді салыстыру кезінде теңдіктің қалай анықталатынын көрсетеді. Бұл параметр негізгі селектор функциясы, салыстырушы функциясы немесе кілт селекторы мен салыстырушыны да қамтитын тізім болуы мүмкін.


## Examples

### Example #1
\{1, 2, 3\} тізіміндегі 3 мәні кездесетін орынды анықтау.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
2022 жылдан бастап барлық күндердің тізімінен орынды табыңыз.
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
Регистрді ескермей, ит сөзінің соңғы рет кездесетін тізіміндегі орнын табыңыз.
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
Тізімнен 28 санының екі бірлігінде орналасқан орынды табыңыз.
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
