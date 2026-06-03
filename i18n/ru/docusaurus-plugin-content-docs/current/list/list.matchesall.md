---
title: List.MatchesAll
---

# List.MatchesAll


Возвращает значение true, если функции условия удовлетворяют все значения в списке.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Возвращает `true`, если функции условия удовлетворяют все значения в списке, в противном случае возвращает значение `false`.

-   `list`: Список, содержащий значения для проверки.
-   `condition`: Условие, которому должны соответствовать значения в списке.


## Examples

### Example #1
Определить, все ли значения в списке \{11, 12, 13\} больше 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Определить, все ли значения в списке \{1, 2, 3\} больше 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Определить, содержат ли все текстовые значения в списке слово "anna" без учета регистра.
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
Определить, что все даты содержат год 2021.
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
