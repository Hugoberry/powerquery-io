---
title: List.PositionOfAny
---

# List.PositionOfAny


Gibt den ersten Offset eines Werts in einer Liste zurück.


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

Gibt den Offset zurück, bei dem ein Element aus der angegebenen Liste von Werten in einer Liste angezeigt wird. Gibt -1 zurück, wenn kein Vorkommen gefunden wird.

-   `list`: Die zu durchsuchende Liste.
-   `values`: Die Liste der Werte, die in der ursprünglichen Liste gesucht werden sollen.
-   `occurrence`: (Optional) Das spezifische Vorkommen, das gemeldet werden soll. Dieser Wert kann `Occurrence.First`, `Occurrence.Last` oder `Occurrence.All` sein. Wenn kein `occurrence` angegeben ist, wird `Occurrence.First` verwendet.
-   `equationCriteria`: (Optional) Gibt an, wie die Gleichheit beim Vergleichen von Werten bestimmt wird. Dieser Parameter kann eine Schlüsselauswahlfunktion, eine Vergleichsfunktion oder eine Liste sein, die sowohl eine Schlüsselauswahl als auch eine Vergleichsfunktion enthält.


## Examples

### Example #1
Ermittelt die erste Position in der Liste "\{1, 2, 3\}", an der der Wert 2 oder 3 erscheint.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Suchen der Position in der Liste aller Instanzen von Datumsangaben aus 2022 oder 2023.
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
Suchen der Position in der Liste des letzten Vorkommens des Worts „Hund“ oder „Katze“, wobei die Groß-/Kleinschreibung ignoriert wird.
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
Suchen Sie eine beliebige Position in der Liste, die sich innerhalb von zwei Einheiten der Zahl 17 oder 28 befindet.
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
