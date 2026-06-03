---
title: List.PositionOf
---

# List.PositionOf


Gibt die Offsets eines Werts in einer Liste zurück.


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

Gibt den Offset zurück, bei dem der angegebene Wert in einer Liste angezeigt wird. Gibt -1 zurück, wenn der Wert nicht angezeigt wird.

-   `list`: Die zu durchsuchende Liste.
-   `value`: Der Wert, der in der Liste gesucht werden soll.
-   `occurrence`: (Optional) Das spezifische Vorkommen, das gemeldet werden soll. Dieser Wert kann `Occurrence.First`, `Occurrence.Last` oder `Occurrence.All` sein. Wenn kein `occurrence` angegeben ist, wird `Occurrence.First` verwendet.
-   `equationCriteria`: (Optional) Gibt an, wie die Gleichheit beim Vergleichen von Werten bestimmt wird. Dieser Parameter kann eine Schlüsselauswahlfunktion, eine Vergleichsfunktion oder eine Liste sein, die sowohl eine Schlüsselauswahl als auch eine Vergleichsfunktion enthält.


## Examples

### Example #1
Ermittelt die Position in der Liste "\{1, 2, 3\}", an der der Wert 3 erscheint.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Suchen der Position in der Liste aller Instanzen von Datumsangaben aus 2022.
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
Suchen der Position in der Liste des letzten Vorkommens des Worts Hund, wobei die Groß-/Kleinschreibung ignoriert wird.
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
Suchen der Position in der Liste, die sich innerhalb von zwei Einheiten der Zahl 28 befindet.
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
