---
title: List.PositionOf
---

# List.PositionOf


Повертає зсуви значень у списку.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Повертає зсув, у якому вказане значення відображається в списку. Повертає –1, якщо значення не відображається.

-   `list`: список для пошуку.
-   `value`: значення, яке потрібно знайти в списку.
-   `occurrence`: (необов’язково) конкретний екземпляр, про який слід звітувати. Це може бути значення `Occurrence.First`, `Occurrence.Last` або `Occurrence.All`. Якщо `occurrence` не вказано, використовується `Occurrence.First`.
-   `equationCriteria`: (необов’язково) спосіб визначення однаковості під час порівняння значень. Цей параметр може бути функцією селектора ключів, функцією порівняння або списком, що містить як селектор ключів, так і засіб порівняння.


## Examples

### Example #1
Знайти позицію у списку \{1, 2, 3\}, в якій зустрічається значення 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Знайти позицію в списку всіх екземплярів дат з 2022 року.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Знайти позицію в списку останнього екземпляра слова dog без урахування регістру.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
Знайти позицію в списку, яка знаходиться в межах двох одиниць від числа 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
