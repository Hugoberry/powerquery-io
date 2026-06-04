---
title: Table.PositionOf
---

# Table.PositionOf


Повертає позицію або позиції рядка в таблиці.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Повертає позицію, у якій рядок `row` зустрічається вперше в зазначеній таблиці `table`. Повертає –1, якщо жодного збігу не знайдено.

-   `table`: вхідна таблиця.
-   `row`: рядок таблиці, позицію якого слід знайти.
-   `occurrence`: *(необов’язково)* визначає, які екземпляри рядка слід повернути.
-   `equationCriteria`: *(необов’язково)* керує порівнянням рядків таблиці.


## Examples

### Example #1
Знайти позицію першого входження \[a = 2, b = 4\] у таблиці `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Знайти позицію другого входження \[a = 2, b = 4\] у таблиці `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Знайти позиції всіх входжень \[a = 2, b = 4\] у таблиці `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
