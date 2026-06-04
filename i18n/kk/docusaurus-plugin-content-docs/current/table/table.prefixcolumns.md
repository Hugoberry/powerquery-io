---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Бағандардың барлығының көрсетілген мәтін түрінде префиксі бар кестені қайтарады.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Берілген `table` ішіндегі барлық баған атауларында `prefix` көрсетілген мәтінінен тұратын префиксі және `prefix.ColumnName` түріндегі кезеңі болатын кестені қайтарады.


## Examples

### Example #1
Кестеде бағандарға "MyTable" префиксін қосу.
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
