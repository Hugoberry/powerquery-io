---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Menghasilkan tabel dan semua kolomnya diawali dengan teks yang diberikan.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Menghasilkan tabel dan semua nama kolomnya dari <code>table</code> yang dimasukkan diawali dengan teks yang diberikan, <code>prefix</code>, ditambah titik dengan format <code><code>prefix</code>.ColumnName</code>.


## Examples

### Example #1 
Memberikan awalan &#34;Mytable&#34; pada kolom dalam tabel.
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
