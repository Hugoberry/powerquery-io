---
title: List.PositionOf
---

# List.PositionOf


Zwraca przesunięcia wartości na liście.


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

Zwraca przesunięcie, przy którym określona wartość jest wyświetlana na liście. Zwraca wartość -1, jeśli wartość nie jest wyświetlana.

-   `list`: lista do przeszukania.
-   `value`: wartość do znalezienia na liście.
-   `occurrence`: (opcjonalnie) określone wystąpienie do zgłoszenia. Ta wartość może być `Occurrence.First`, `Occurrence.Last` lub `Occurrence.All`. Jeśli nie określono wartości `occurrence`, zostanie użyta wartość `Occurrence.First`.
-   `equationCriteria`: (opcjonalnie) określa sposób, w jaki jest ustalana równość podczas porównywania wartości. Ten parametr może być funkcją selektora kluczy, funkcją porównującą, lub listą zawierającą zarówno selektor kluczy, jak i funkcję porównującą.


## Examples

### Example #1
Znajdź pozycję na liście \{1, 2, 3\}, na której znajduje się wartość 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Znajdź pozycję na liście wszystkich wystąpień dat z roku 2022.
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
Znajdź pozycję na liście ostatniego wystąpienia wyrazu dog, ignorując wielkość liter.
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
Znajdź pozycję na liście znajdującą się w dwóch jednostkach liczby 28.
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
