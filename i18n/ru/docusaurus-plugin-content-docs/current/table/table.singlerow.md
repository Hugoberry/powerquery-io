---
title: Table.SingleRow
---

# Table.SingleRow


Возвращает одну строку в таблице.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Возвращает единственную строку в одностроковой таблице`table`. Если в таблице `table` более одной строки, генерируется ошибка.


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
