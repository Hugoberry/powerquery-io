---
title: Table.SingleRow
---

# Table.SingleRow


Menghasilkan satu baris dalam tabel.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Menghasilkan satu baris dalam `table` satu baris. Jika `table` memiliki lebih dari satu baris, kesalahan akan muncul.


## Examples

### Example #1
Menghasilkan baris tunggal dalam tabel.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
