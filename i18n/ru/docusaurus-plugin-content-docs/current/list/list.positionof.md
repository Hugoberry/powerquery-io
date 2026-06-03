---
title: List.PositionOf
---

# List.PositionOf


Возвращает смещение значения в списке.


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

Возвращает смещение указанного значения в списке. Возвращает -1, если значение не найдено.

-   `list`: список, по которому выполняется поиск.
-   `value`: значение, которое нужно найти в списке.
-   `occurrence`: (необязательно) конкретное вхождение, о котором следует сообщить. Возможные значения этого параметра: `Occurrence.First`, `Occurrence.Last` и `Occurrence.All`. Если значение `occurrence` не задано, будет использовано `Occurrence.First`.
-   `equationCriteria`: (необязательно) указывает, как определяется равенство при сравнении значений. Этот параметр может быть функцией селектора ключа, функцией сравнения или списком, содержащим как функцию селектора ключа, так и функцию сравнения.


## Examples

### Example #1
Найти позицию в списке \{1, 2, 3\}, в которой появляется значение 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Найти позицию в списке всех экземпляров дат, относящихся к 2022 году.
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
Найти позицию в списке последнего вхождения слова "dog" без учета регистра.
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
Найти позицию в списке, которая находится в пределах двух единиц от числа 28.
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
