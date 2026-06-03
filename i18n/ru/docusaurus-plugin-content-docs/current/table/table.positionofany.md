---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Возвращает позиции любой из указанных строк в таблице.


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

Возвращает позицию строки или позиции строк из `table` от первого вхождения в списке `rows`. Возвращает -1, если вхождение не найдено.

-   `table`: входная таблица.
-   `rows`: список строк в таблице, позиции которых нужно найти.
-   `occurrence`: *(необязательно)* указывает, какие вхождения строки нужно вернуть.
-   `equationCriteria`: *(необязательно)* управляет сравнением строк таблицы.


## Examples

### Example #1
Найти позицию первого вхождения \[a = 2, b = 4\] или \[a = 6, b = 8\] в таблице `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Найти позиции всех вхождений \[a = 2, b = 4\] или \[a = 6, b = 8\] в таблице `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
