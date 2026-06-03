---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Развертывает столбец записей или столбец таблиц в несколько столбцов в содержащей их таблице.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Развертывает таблицы в `table`\[`column`\] в несколько строк и столбцов. `columnNames` используется для выбора столбцов для развертывания из внутренней таблицы. Укажите `newColumnNames`, чтобы избежать конфликтов между существующими и новыми столбцами.


## Examples

### Example #1
Развернуть столбцы таблицы в `[a]` в таблице `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` в 3 столбца - `[t.a]`, `[t.b]` и `[t.c]`.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
