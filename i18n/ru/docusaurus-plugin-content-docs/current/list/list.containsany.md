---
title: List.ContainsAny
---

# List.ContainsAny


Указывает, содержит ли список какие-либо значения из другого списка.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, содержит ли список какие-либо значения из другого списка. Возвращает `true`, если значения найдены в списке, в противном случае — `false`.

-   `list` : Список для поиска.
-   `values` : Список значений для поиска в первом списке.
-   `equationCriteria` : (Необязательно) Компаратор, используемый для определения равенства двух значений.


## Examples

### Example #1
Определите, содержит ли список \{1, 2, 3, 4, 5\} число 3 или 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Определите, содержит ли список \{1, 2, 3, 4, 5\} число 6 или 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Определите, содержит ли список лошадь или сову, игнорируя регистр.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Определите, содержит ли список дату 8 апреля 2022 года или 12 января 2021 года.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
