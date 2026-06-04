---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Повертає таблицю, на початок кожного стовпця якої додано заданий текст.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Повертає таблицю, де до всіх назв стовпців, отриманих із таблиці `table`, на початку додаються вказаний текст (`prefix`) і крапка: `prefix.ColumnName`.


## Examples

### Example #1
Додати на початку стовпців таблиці текст "MyTable".
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
