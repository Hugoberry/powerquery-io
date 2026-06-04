---
title: List.ContainsAny
---

# List.ContainsAny


Вказує, чи список містить будь-яке значення з іншого списку.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Показує, чи містить список будь-яке значення з іншого списку. Повертає `true`, якщо значення знайдено в списку, `false` в іншому разі.

-   `list`: список для пошуку.
-   `values`: список значень, які потрібно знайти в першому списку.
-   `equationCriteria`: (необов’язково) засіб порівняння, який використовується, щоб визначити, чи рівні два значення.


## Examples

### Example #1
Визначити, чи список \{1, 2, 3, 4, 5\} містить 3 або 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи список \{1, 2, 3, 4, 5\} містить 6 або 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Визначити, чи містить список коня або сову, без урахування регістру.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Визначити, чи містить список дату 8 квітня 2022 року або 12 січня 2021 року.
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
