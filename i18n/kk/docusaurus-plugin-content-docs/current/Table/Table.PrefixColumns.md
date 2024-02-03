---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Бағандардың барлығының көрсетілген мәтін түрінде префиксі бар кестені қайтарады.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Берілген <code>table</code> ішіндегі барлық баған атауларында <code>prefix</code> көрсетілген мәтінінен тұратын префиксі және <code><code>prefix</code>.ColumnName</code> түріндегі кезеңі болатын кестені қайтарады.


## Examples

### Example #1 
Кестеде бағандарға &#34;MyTable&#34; префиксін қосу.
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
