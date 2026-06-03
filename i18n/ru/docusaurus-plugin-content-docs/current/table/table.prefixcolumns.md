---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Возвращает таблицу, где для всех столбцов задан определенный текст в качестве префикса.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Возвращает таблицу, где все имена столбцов из `table` имеют префикс с указанным текстом `prefix`, плюс точка, в формате `prefix.ColumnName`.


## Examples

### Example #1
Задание префикса MyTable для столбцов в таблице.
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
