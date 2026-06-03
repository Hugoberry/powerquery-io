---
title: List.PositionOfAny
---

# List.PositionOfAny


Retourneert de eerste verschuiving van een waarde in een lijst.


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

Retourneert de verschuiving waarmee een item uit de opgegeven lijst met waarden wordt weergegeven in een lijst. Retourneert -1 als er geen exemplaar wordt gevonden.

-   `list`: de lijst die doorzocht moet worden.
-   `values`: de lijst met waarden die in de oorspronkelijke lijst moeten worden gevonden.
-   `occurrence`: (optioneel) het specifieke exemplaar dat moet worden gerapporteerd. Deze waarde kan `Occurrence.First`, `Occurrence.Last` of `Occurrence.All` zijn. Als er geen `occurrence` is opgegeven, wordt `Occurrence.First` gebruikt.
-   `equationCriteria`: (optioneel) geeft aan hoe gelijkheid wordt bepaald bij het vergelijken van waarden. Deze parameter kan een sleutelselectorfunctie, een vergelijkingsfunctie of een lijst met zowel een sleutelselector als een vergelijker zijn.


## Examples

### Example #1
De eerste positie in de lijst \{1, 2, 3\} opzoeken waar de waarde 2 of 3 staat.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Zoek de positie in de lijst met alle exemplaren van datums van 2022 of 2023.
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
Zoek de positie in de lijst met de laatste instantie van het woord hond of kat, waarbij hoofd- en kleine letters worden genegeerd.
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
Zoek een positie in de lijst binnen twee eenheden van het getal 17 of 28.
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
