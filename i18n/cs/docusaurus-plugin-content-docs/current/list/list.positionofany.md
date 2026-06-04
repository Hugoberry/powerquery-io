---
title: List.PositionOfAny
---

# List.PositionOfAny


Vrátí první posunutí hodnoty v seznamu.


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

Vrátí posun, při kterém se položka ze zadaného seznamu hodnot zobrazí v seznamu. Pokud nebyl nalezen žádný výskyt, vrátí hodnotu -1.

-   `list`: Seznam, který se má prohledat.
-   `values`: Seznam hodnot, které se mají najít v původním seznamu.
-   `occurrence`: (Volitelné) Konkrétní výskyt, který se má nahlásit. Tato hodnota může být `Occurrence.First`, `Occurrence.Last` nebo `Occurrence.All`. Pokud není zadáno žádné `occurrence`, použije se `Occurrence.First`.
-   `equationCriteria`: (Volitelné) Definuje, jak se určuje rovnost při porovnávání hodnot. Tento parametr může být funkce pro výběr klíče, funkce pro porovnání nebo seznam obsahující jak funkci pro výběr klíče, tak funkci pro porovnání.


## Examples

### Example #1
Vyhledá první pozici v seznamu \{1, 2, 3\}, na které se vyskytuje hodnota 2 nebo 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Najděte v seznamu pozici všech výskytů dat z roku 2022 nebo 2023.
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
Najděte v seznamu pozici posledního výskytu slova pes nebo kočka, bez ohledu na velikost písmen.
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
Najděte v seznamu libovolnou pozici, která je v rozmezí dvou jednotek od čísla 17 nebo 28.
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
