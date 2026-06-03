---
title: List.ContainsAll
---

# List.ContainsAll


Указывает, содержит ли список все значения из другого списка.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, включает ли список все значения из другого списка. Возвращает `true`, если все значения найдены в списке, в противном случае — `false`.

-   `list` : Список для поиска.
-   `values` : Список значений для поиска в первом списке.
-   `equationCriteria` : (Необязательно) Компаратор, используемый для определения равенства двух значений.


## Examples

### Example #1
Определите, содержит ли список \{1, 2, 3, 4, 5\} числа 3 и 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Определите, содержит ли список \{1, 2, 3, 4, 5\} числа 5 и 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Определите, есть ли в списке собака и лошадь, игнорируя регистр.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Определите, содержат ли список даты 8 апреля 2022 года и 6 июля 2021 года.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
