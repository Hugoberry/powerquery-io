---
title: Table.PositionOf
---

# Table.PositionOf


Возвращает позиции строки в таблице.


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

Возвращает позицию строки первого вхождения `row` в указанной `table`. Возвращает -1, если вхождение не найдено.

-   `table`: входная таблица.
-   `row`: строка в таблице, позицию которой нужно найти.
-   `occurrence`: *(необязательно)* указывает, какие вхождения строки нужно вернуть.
-   `equationCriteria`: *(необязательно)* управляет сравнением строк таблицы.


## Examples

### Example #1
Найти позицию первого вхождения \[a = 2, b = 4\] в таблице `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Найти позицию второго вхождения \[a = 2, b = 4\] в таблице `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Найти позиции всех вхождений \[a = 2, b = 4\] в таблице `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
