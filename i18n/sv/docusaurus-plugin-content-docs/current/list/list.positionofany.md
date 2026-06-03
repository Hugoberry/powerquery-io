---
title: List.PositionOfAny
---

# List.PositionOfAny


Returnerar den första förskjutningen för ett värde i en lista.


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

Returnerar förskjutningen där ett objekt från den angivna listan av värden visas i en lista. Returnerar -1 om ingen förekomst hittas.

-   `list`: Listan att söka i.
-   `values`: Listan av värden som ska finnas i den ursprungliga listan.
-   `occurrence`: (valfritt) Den specifika förekomst som ska rapporteras. Det här värdet kan vara `Occurrence.First`, `Occurrence.Last` eller `Occurrence.All`. Om inget `occurrence` anges, används `Occurrence.First`.
-   `equationCriteria`: (valfritt) Anger hur likhet bestäms när värden jämförs. Den här parametern kan vara en nyckelväljare, en jämförelsefunktion eller en lista som innehåller både en nyckelväljare och en jämförelsefunktion.


## Examples

### Example #1
Hitta den första positionen i listan \{1, 2, 3\} där värdet 2 eller 3 förekommer.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Hitta positionen i listan över alla instanser av datum från 2022 eller 2023.
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
Hitta positionen i listan över den senaste förekomsten av ordet hund eller katt och ignorera skiftläge.
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
Hitta valfri position i listan som ligger inom två enheter från antingen talet 17 eller 28.
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
