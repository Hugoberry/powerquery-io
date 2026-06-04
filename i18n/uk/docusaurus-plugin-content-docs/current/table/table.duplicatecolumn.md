---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Дублює стовпець із вказаним іменем стовпця. Значення та тип копіюються з вихідного стовпця.


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

Дублювати стовпець з іменем `columnName` у таблицю `table`. Значення й тип для стовпця `newColumnName` копіюються зі стовпця `columnName`.


## Examples

### Example #1
Дублювання стовпця "a" у стовпець з іменем "скопійований стовпець" у таблиці `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
