---
title: List.PositionOf
---

# List.PositionOf


Retorna el desplaçament o els desplaçaments d'un valor en una llista.


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

Returns the offset at which the specified value appears in a list. Returns -1 if the value doesn't appear.

-   `list`: The list to search.
-   `value`: The value to find in the list.
-   `occurrence`: (Optional) The specific occurrence to report. This value can be `Occurrence.First`, `Occurrence.Last`, or `Occurrence.All`. If no `occurrence` is specified, `Occurrence.First` is used.
-   `equationCriteria`: (Optional) Specifies how equality is determined when comparing values. This parameter can be a key selector function, a comparer function, or a list containing both a key selector and a comparer.


## Examples

### Example #1
Troba la posició a la llista \{1, 2, 3\} en la qual apareix el valor 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Troba la posició a la llista de totes les instàncies de dates de 2022.
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
Find the position in the list of the last occurrence of the word dog, ignoring case.
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
Troba la posició a la llista que està entre dues unitats del nombre 28.
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
