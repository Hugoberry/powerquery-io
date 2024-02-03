---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Returnează un tabel în care toate coloanele au ca prefix textul dat.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Returnează un tabel în care toate numele coloanelor din <code>table</code> furnizate au ca prefix textul dat, <code>prefix</code>, plus un punct în forma <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Introduceți prefixul „MyTable” pentru coloanele din tabel.
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
