---
title: List.Max
---

# List.Max


Повертає максимальне значення або значення за замовчуванням для пустого списку.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Повертає максимальний елемент у списку або необов’язкове значення за замовчуванням, якщо список пустий.

-   `list`: список значень.
-   `default`: (необов’язково) значення, яке повертається, якщо список пустий.
-   `comparisonCriteria`: (необов’язково) функція, що використовується для перетворення значень перед порівнянням. Якщо цей параметр дорівнює `Null`, значення порівнюються без перетворення.
-   `includeNulls`: (необов’язково) указує, чи слід включати `Null`\-значення в списку для визначення максимального елемента. Стандартне значення: `true`.


## Examples

### Example #1
Знайти максимальне значення в указаному списку.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Знайти максимальне значення в указаному списку або повернути -1, якщо список пустий.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Знайти останній за алфавітом елемент у списку текстових значень. Якщо список пустий, повернути "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Знайти найпізнішу дату в списку дат у німецькому форматі. Якщо список пустий, повернути 1 січня 2000 р.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
