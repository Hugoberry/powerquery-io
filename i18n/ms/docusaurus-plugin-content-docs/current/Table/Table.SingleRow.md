---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Mengembalikan baris tunggal dalam jadual.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Mengembalikan baris tunggal dalam satu baris <code>table</code>. Jika <code>table</code> mempunyai lebih daripada satu baris, pengecualian dikembalikan.


## Examples

### Example #1 
Mengembalikan baris tunggal dalam jadual.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
