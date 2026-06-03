---
title: Table.Partition
---

# Table.Partition


Секционирует таблицу в список таблиц с учетом заданного количества групп и столбца.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Секционирует `table` в список из `groups` таблиц на основании значения `column` и функции `hash`. Функция `hash` применяется к значению строки `column` для получения хэш-значения строки. Остаток от целочисленного деления хэш-значения `groups` определяет, в какую из возвращенных таблиц будет помещена строка.

-   `table`: таблица для секционирования.
-   `column`: столбец для хэширования, позволяющий определить, в какой из возвращенных таблиц находится строка.
-   `groups`: количество таблиц, на которое будет разделена исходная таблица.
-   `hash`: функция, применяемая для получения хэш-значения.


## Examples

### Example #1
Секционировать таблицу `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` в две таблицы по столбцу \[a\], используя значения столбцов в качестве хэш-функции.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
