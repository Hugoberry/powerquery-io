---
title: List.PositionOfAny
---

# List.PositionOfAny


Zwraca pierwsze przesunięcie wartości na liście.


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

Zwraca przesunięcie, przy którym element z określonej listy wartości jest wyświetlany na liście. Zwraca wartość -1, jeśli nie zostanie znalezione żadne wystąpienie.

-   `list`: lista do przeszukania.
-   `values`: lista wartości do znalezienia na oryginalnej liście.
-   `occurrence`: (opcjonalnie) określone wystąpienie do zgłoszenia. Ta wartość może być `Occurrence.First`, `Occurrence.Last` lub `Occurrence.All`. Jeśli nie określono wartości `occurrence`, zostanie użyta wartość `Occurrence.First`.
-   `equationCriteria`: (opcjonalnie) określa sposób, w jaki jest ustalana równość podczas porównywania wartości. Ten parametr może być funkcją selektora kluczy, funkcją porównującą, lub listą zawierającą zarówno selektor kluczy, jak i funkcję porównującą.


## Examples

### Example #1
Znajdź pierwszą pozycję na liście \{1, 2, 3\}, na której znajduje się wartość 2 lub 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Znajdź pozycję na liście wszystkich wystąpień dat z roku 2022 lub 2023.
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
Znajdź pozycję na liście ostatnich wystąpień słowa pies lub kot, ignorując wielkość liter.
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
Znajdź dowolną pozycję na liście znajdującą się w obrębie dwóch jednostek liczby 17 lub 28.
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
