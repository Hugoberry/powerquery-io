---
title: List.PositionOfAny
---

# List.PositionOfAny


Повертає перший зсув значення у списку.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Повертає зсув, у якому елемент із вказаного списку значень зʼявляється в списку. Повертає –1, якщо жодного збігу не знайдено.

-   `list`: список для пошуку.
-   `values`: список значень, які потрібно знайти у вихідному списку.
-   `occurrence`: (необов’язково) конкретний екземпляр, про який слід звітувати. Це може бути значення `Occurrence.First`, `Occurrence.Last` або `Occurrence.All`. Якщо `occurrence` не вказано, використовується `Occurrence.First`.
-   `equationCriteria`: (необов’язково) спосіб визначення однаковості під час порівняння значень. Цей параметр може бути функцією селектора ключів, функцією порівняння або списком, що містить як селектор ключів, так і засіб порівняння.


## Examples

### Example #1
Знайти першу позицію у списку \{1, 2, 3\}, в якій зустрічається значення 2 або 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Знайти позицію в списку всіх екземплярів дат із 2022 або 2023 року.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Знайти позицію в списку останнього входження слова dog або cat без урахування регістру.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Знайдіть будь-яку позицію у списку, розташовану в межах двох одиниць числа 17 або 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
