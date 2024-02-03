---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Menghasilkan satu baris dalam tabel.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Menghasilkan satu baris dalam <code>table</code> satu baris. Jika <code>table</code> memiliki lebih dari satu baris, pengecualian akan dibuat.


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
