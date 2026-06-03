---
title: List.Contains
---

# List.Contains


Указывает, содержит ли список значение.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, содержит ли список указанное значение. Возвращает `true`, если значение найдено в списке, в противном случае — `false`.

-   `list` : Список для поиска.
-   `value` : Значение для поиска в списке.
-   `equationCriteria` : (Необязательно) Компаратор, используемый для определения равенства двух значений.


## Examples

### Example #1
Определите, содержит ли список \{1, 2, 3, 4, 5\} число 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Определите, содержит ли список \{1, 2, 3, 4, 5\} число 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Игнорируя регистр, определите, содержит ли список слово "rhubarb".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Определите, содержит ли список дату 8 апреля 2022 года.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
