---
title: List.MatchesAny
---

# List.MatchesAny


Возвращает значение true, если функции условия соответствует любое значение.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Возвращает `true`, если функции условия соответствует любое значение в списке, в противном случае возвращает значение `false`.

-   `list`: Список, содержащий значения для проверки.
-   `condition`: Условие, которому должны соответствовать значения в списке.


## Examples

### Example #1
Определить, есть ли в списке \{9, 10, 11\} хотя бы одно значение больше 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Определить, есть ли в списке \{1, 2, 3\} хотя бы одно значение больше 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Определить, содержит ли хотя бы одно текстовое значение в списке слово "anna" без учета регистра.
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
Определить, содержит ли хотя бы одна дата год 2021.
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
