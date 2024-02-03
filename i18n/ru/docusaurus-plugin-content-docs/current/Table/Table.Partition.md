---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Секционирует <code>table</code> в список из <code>groups</code> таблиц на основании значения <code>column</code> и функции <code>hash</code>.    Функция <code>hash</code> применяется к значению строки <code>column</code> для получения хэш-значения строки. Остаток от целочисленного деления хэш-значения <code>groups</code> определяет, в какую из возвращенных таблиц будет помещена строка.    <ul>       <li><code>table</code>: таблица для секционирования.</li>       <li><code>column</code>: столбец для хэширования, позволяющий определить, в какой из возвращенных таблиц находится строка.</li>       <li><code>groups</code>: количество таблиц, на которое будет разделена исходная таблица.</li>       <li><code>hash</code>: функция, применяемая для получения хэш-значения.</li>    </ul>  


## Examples

### Example #1 
Секционировать таблицу &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; в две таблицы по столбцу [a], используя значения столбцов в качестве хэш-функции.
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
