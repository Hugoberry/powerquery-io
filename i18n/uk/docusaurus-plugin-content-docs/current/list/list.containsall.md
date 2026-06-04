---
title: List.ContainsAll
---

# List.ContainsAll


Вказує, чи список містить усі значення в іншому списку.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Визначає, чи містить список усі значення з іншого списку. Повертає `true`, якщо всі значення знайдено в списку, `false` в іншому разі.

-   `list`: список для пошуку.
-   `values`: список значень, які потрібно знайти в першому списку.
-   `equationCriteria`: (необов’язково) засіб порівняння, який використовується, щоб визначити, чи рівні два значення.


## Examples

### Example #1
Визначити, чи список \{1, 2, 3, 4, 5\} містить 3 та 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи список \{1, 2, 3, 4, 5\} містить 5 і 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Визначити, чи містить список собаку та коня, без урахування регістру.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Визначити, чи містить список дати 8 квітня 2022 року та 6 липня 2021 року.
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
