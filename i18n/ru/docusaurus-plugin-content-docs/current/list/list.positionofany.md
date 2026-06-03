---
title: List.PositionOfAny
---

# List.PositionOfAny


Возвращает первое смещение значения в списке.


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

Возвращает смещение элемента в указанном списке значений. Возвращает -1, если вхождение не найдено.

-   `list`: список, по которому выполняется поиск.
-   `values`: список значений, которые следует найти в исходном списке.
-   `occurrence`: (необязательно) конкретное вхождение, о котором следует сообщить. Возможные значения этого параметра: `Occurrence.First`, `Occurrence.Last` и `Occurrence.All`. Если значение `occurrence` не задано, будет использовано `Occurrence.First`.
-   `equationCriteria`: (необязательно) указывает, как определяется равенство при сравнении значений. Этот параметр может быть функцией селектора ключа, функцией сравнения или списком, содержащим как функцию селектора ключа, так и функцию сравнения.


## Examples

### Example #1
Найти первую позицию в списке \{1, 2, 3\}, в которой появляется значение 2 или 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Найти позиции в списке всех имеющихся значений дат, относящихся к 2022 или 2023 году.
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
Найти позицию в списке последнего вхождения любого из двух слов, "dog" или "cat", без учета регистра.
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
Найти любую позицию в списке, которая находится в пределах двух единиц от одного из следующих чисел: 17 или 28.
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
