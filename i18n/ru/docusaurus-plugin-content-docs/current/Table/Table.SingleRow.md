---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Возвращает одну строку в таблице.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Возвращает единственную строку в одной строке <code>table</code>. Если <code>table</code> имеет более одной строки, возникает исключение.


## Examples

### Example #1 
Возврат одной строки из таблицы.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
