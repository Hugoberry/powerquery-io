---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Mengembalikan jadual yang mana semua lajur telah ditambah awalan dengan teks yang ditentukan.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Mengembalikan jadual yang mana semua nama lajur daripada <code>table</code> yang disediakan telah ditambah awalan dengan teks yang ditentukan, <code>prefix</code>, tambah tempoh dalam bentuk <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Tambah awalan pada lajur dengan &#34;MyTable&#34; dalam jadual.
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
