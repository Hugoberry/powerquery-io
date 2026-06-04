---
title: List.MatchesAny
---

# List.MatchesAny


Повертає значення true, якщо функцію умови задовольняє будь-яке значення.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Повертає значення `true`, якщо функцію умови задовольняє будь-яке значення в списку, у протилежному випадку повертає значення `false`.

-   `list`: список, що містить значення для перевірки.
-   `condition`: умова, яку потрібно звірити зі значеннями в списку.


## Examples

### Example #1
Визначити, чи якісь із значень у списку \{9, 10, 11\} більше ніж 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи якісь із значень у списку \{1, 2, 3\} більше ніж 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Визначити, чи якісь із текстових значень у списку містять текст "cat". Регістр не враховується.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Визначити, чи якісь із дат містять 2021 рік.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
