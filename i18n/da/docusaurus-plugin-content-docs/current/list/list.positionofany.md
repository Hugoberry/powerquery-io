---
title: List.PositionOfAny
---

# List.PositionOfAny


Returnerer første forskydning for en værdi på en liste.


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

Returns the offset at which an item from the specified list of values appears in a list. Returns -1 if no occurrence is found.

-   `list`: The list to search.
-   `values`: The list of values to find in the original list.
-   `occurrence`: (Optional) The specific occurrence to report. This value can be `Occurrence.First`, `Occurrence.Last`, or `Occurrence.All`. If no `occurrence` is specified, `Occurrence.First` is used.
-   `equationCriteria`: (Optional) Specifies how equality is determined when comparing values. This parameter can be a key selector function, a comparer function, or a list containing both a key selector and a comparer.


## Examples

### Example #1
Find den første position på listen \{1, 2, 3\}, hvor værdien 2 eller 3 vises.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Find placeringen på listen over alle forekomster af datoerne fra enten 2022 eller 2023.
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
Find positionen på listen over den sidste forekomst af enten ordet hund eller kat, hvor der ikke er forskel på store og små bogstaver.
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
Find en vilkårlig placering på listen, der er inden for to enheder af enten tallet 17 eller 28.
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
