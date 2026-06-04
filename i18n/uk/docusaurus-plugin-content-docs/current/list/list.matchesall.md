---
title: List.MatchesAll
---

# List.MatchesAll


Повертає значення true, якщо функцію умови задовольняють усі значення у списку.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Повертає значення `true`, якщо функцію умови задовольняють усі значення в списку, у протилежному випадку повертає значення `false`.

-   `list`: список, що містить значення для перевірки.
-   `condition`: умова, яку потрібно звірити зі значеннями в списку.


## Examples

### Example #1
Визначити, чи всі значення у списку \{11, 12, 13\} більші 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи всі значення у списку \{1, 2, 3\} більші 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Визначити, чи всі текстові значення в списку містять текст "anna". Регістр не враховується.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Визначити, чи всі дати містять 2021 рік.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
