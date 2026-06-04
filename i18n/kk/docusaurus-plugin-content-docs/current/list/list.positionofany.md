---
title: List.PositionOfAny
---

# List.PositionOfAny


Тізімдегі мәннің бірінші ауытқуын қайтарады.


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

Көрсетілген мәндер тізімде пайда болатын жылжытуды қайтарады. Ешқандай оқиға табылмаса, -1 қайтарады.

-   `list`: Іздеуге арналған тізім.
-   `values`: Бастапқы тізімде табуға болатын мәндер тізімі.
-   `occurrence`: (Міндетті емес) Хабарлау керек нақты оқиға. Бұл мән `Occurrence.First`, `Occurrence.Last` немесе `Occurrence.All` бола алады. Ешқандай `occurrence` көрсетілмесе, `Occurrence.First` мәні қолданылады.
-   `equationCriteria`: (Міндетті емес) Мәндерді салыстыру кезінде теңдіктің қалай анықталатынын көрсетеді. Бұл параметр негізгі селектор функциясы, салыстырушы функциясы немесе кілт селекторы мен салыстырушыны да қамтитын тізім болуы мүмкін.


## Examples

### Example #1
\{1, 2, 3\} тізіміндегі 2 немесе 3 мәні кездесетін бірінші орынды анықтау.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
2022 немесе 2023 жылдан бастап барлық күндердің тізімінен орынды табыңыз.
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
Регистрді ескермей, "dog" немесе "cat" сөзінің соңғы рет кездесетін тізіміндегі орнын табу.
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
Тізімнен 17 немесе 28 санының екі бірлігінде орналасқан кез келген орынды табыңыз.
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
