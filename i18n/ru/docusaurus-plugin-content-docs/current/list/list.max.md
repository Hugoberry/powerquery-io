---
title: List.Max
---

# List.Max


Возвращает максимальное значение или значение по умолчанию для пустого списка.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Возвращает элемент списка с максимальным значением или необязательное значение по умолчанию, если список пуст.

-   `list`: список значений.
-   `default`: (необязательно) значение, возвращаемое при пустом списке
-   `comparisonCriteria`: (необязательно) функция, используемая для преобразования значений перед сравнением. Если этот параметр равен `null`, значения сравниваются без преобразования
-   `includeNulls`: (необязательно) указывает, следует ли учитывать значения `null` при определении элемента с максимальным значением в списке. Значение по умолчанию — `true`.


## Examples

### Example #1
Поиск максимального значения в указанном списке.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Поиск максимального значения в указанном списке. Если список пуст, возвращается -1.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Поиск последнего по алфавиту элемента в списке текстовых значений. Если список пуст, возвращается "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Поиск самой поздней даты из списка дат в немецком формате. При пустом списке возвращается 1 января 2000 г.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
