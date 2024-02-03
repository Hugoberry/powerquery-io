---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Возвращает таблицу, где для всех столбцов задан определенный текст в качестве префикса.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Возвращает таблицу, где все имена столбцов из предоставленной "<code>table</code>" имеют в качестве префикса заданный текст (<code>prefix</code>), а также точку в формате <code>prefix</code><code>.ColumnName</code>.


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
