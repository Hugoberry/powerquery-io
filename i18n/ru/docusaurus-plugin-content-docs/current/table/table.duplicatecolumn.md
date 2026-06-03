---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Повторяет столбец с указанным именем. Значения и тип копируются из исходного столбца.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Создать дубликат столбца с именем `columnName` в таблице `table`. Значения и тип данных для столбца `newColumnName` копируются из столбца `columnName`.


## Examples

### Example #1
Повторять столбец "a" в столбец с именем "copied column" в таблице `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
