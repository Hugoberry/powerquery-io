---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Mengembalikan jadual yang mana semua lajur telah ditambah awalan dengan teks yang ditentukan.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Mengembalikan jadual yang semua nama lajur daripada `table` yang disediakan telah ditambah awalan dengan teks yang ditentukan, `prefix`, tambah tempoh dalam bentuk `prefix.ColumnName`.


## Examples

### Example #1
Tambah awalan pada lajur dengan "MyTable" dalam jadual.
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
