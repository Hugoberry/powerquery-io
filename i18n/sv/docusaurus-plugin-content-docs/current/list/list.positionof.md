---
title: List.PositionOf
---

# List.PositionOf


Returnerar förskjutningen eller förskjutningarna för ett värde i en lista.


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

Returnerar förskjutningen där det angivna värdet visas i en lista. Returnerar -1 om värdet inte visas.

-   `list`: Listan att söka i.
-   `value`: Värdet som ska hittas i listan.
-   `occurrence`: (valfritt) Den specifika förekomst som ska rapporteras. Det här värdet kan vara `Occurrence.First`, `Occurrence.Last` eller `Occurrence.All`. Om inget `occurrence` anges, används `Occurrence.First`.
-   `equationCriteria`: (valfritt) Anger hur likhet bestäms när värden jämförs. Den här parametern kan vara en nyckelväljare, en jämförelsefunktion eller en lista som innehåller både en nyckelväljare och en jämförelsefunktion.


## Examples

### Example #1
Hitta positionen i listan \{1, 2, 3\} där värdet 3 förekommer.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Hitta positionen i listan över alla instanser av datum från 2022.
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
Hitta positionen i listan över den sista förekomsten av ordet hund, och ignorera skiftläge.
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
Hitta positionen i listan som ligger inom två enheter av talet 28.
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
