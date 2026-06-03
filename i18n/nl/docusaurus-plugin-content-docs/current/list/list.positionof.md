---
title: List.PositionOf
---

# List.PositionOf


Retourneert de verschuiving of verschuivingen van een waarde in een lijst.


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

Retourneert de verschuiving waarmee de opgegeven waarde in een lijst wordt weergegeven. Retourneert -1 als de waarde niet wordt weergegeven.

-   `list`: de lijst die doorzocht moet worden.
-   `value`: de waarde die in de lijst moet worden gevonden.
-   `occurrence`: (optioneel) het specifieke exemplaar dat moet worden gerapporteerd. Deze waarde kan `Occurrence.First`, `Occurrence.Last` of `Occurrence.All` zijn. Als er geen `occurrence` is opgegeven, wordt `Occurrence.First` gebruikt.
-   `equationCriteria`: (optioneel) geeft aan hoe gelijkheid wordt bepaald bij het vergelijken van waarden. Deze parameter kan een sleutelselectorfunctie, een vergelijkingsfunctie of een lijst met zowel een sleutelselector als een vergelijker zijn.


## Examples

### Example #1
De positie in de lijst \{1, 2, 3\} opzoeken waar de waarde 3 staat.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Zoek de positie in de lijst met alle exemplaren van datums van 2022.
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
Zoek de positie in de lijst met laatste instanties van het woord hond, en negeer hoofd- en kleine letters.
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
Zoek de positie in de lijst die zich binnen twee eenheden van het getal 28 bevindt.
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
