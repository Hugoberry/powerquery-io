---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Повертає позицію або позиції будь-якого із вказаних рядків у таблиці.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Повертає позиції з таблиці `table`, де вперше зустрічаються рядки списку `rows`. Повертає –1, якщо жодного збігу не знайдено.

-   `table`: вхідна таблиця.
-   `rows`: список рядків таблиці, позиції яких слід знайти.
-   `occurrence`: *(необов’язково)* визначає, які екземпляри рядка слід повернути.
-   `equationCriteria`: *(необов’язково)* керує порівнянням рядків таблиці.


## Examples

### Example #1
Знайти позицію першого входження \[a = 2, b = 4\] або \[a = 6, b = 8\] у таблиці `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Знайти позиції всіх входжень \[a = 2, b = 4\] або \[a = 6, b = 8\] у таблиці `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
