---
title: List.Contains
---

# List.Contains


Вказує, чи список містить значення.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Показує, чи містить список указане значення. Повертає `true`, якщо значення знайдено в списку, `false` в іншому разі.

-   `list`: список для пошуку.
-   `value`: значення, яке потрібно знайти в списку.
-   `equationCriteria`: (необов’язково) засіб порівняння, який використовується, щоб визначити, чи рівні два значення.


## Examples

### Example #1
Визначити, чи список \{1, 2, 3, 4, 5\} містить 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи список \{1, 2, 3, 4, 5\} містить 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Визначити, чи список містить "rhubarb", не враховуючи регістр.
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
Визначити, чи містить список дату 8 квітня 2022 року.
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
