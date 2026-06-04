---
title: List.PositionOf
---

# List.PositionOf


Vrátí posunutí hodnoty v seznamu.


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

Vrátí posun, při kterém se zadaná hodnota zobrazí v seznamu. Pokud se hodnota nezobrazí, vrátí hodnotu -1.

-   `list`: Seznam, který se má prohledat.
-   `value`: Hodnota, která se má najít v seznamu
-   `occurrence`: (Volitelné) Konkrétní výskyt, který se má nahlásit. Tato hodnota může být `Occurrence.First`, `Occurrence.Last` nebo `Occurrence.All`. Pokud není zadáno žádné `occurrence`, použije se `Occurrence.First`.
-   `equationCriteria`: (Volitelné) Definuje, jak se určuje rovnost při porovnávání hodnot. Tento parametr může být funkce pro výběr klíče, funkce pro porovnání nebo seznam obsahující jak funkci pro výběr klíče, tak funkci pro porovnání.


## Examples

### Example #1
Vyhledá pozici v seznamu \{1, 2, 3\}, na které se vyskytuje hodnota 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Najít pozici v seznamu všech instancí kalendářních dat z roku 2022
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
Najít pozici v seznamu posledního výskytu slova „dog“ s ignorováním velikosti písmen
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
Najděte pozici v seznamu, která je v rozmezí dvou jednotek od čísla 28.
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
