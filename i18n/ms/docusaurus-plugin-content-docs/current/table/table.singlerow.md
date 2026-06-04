---
title: Table.SingleRow
---

# Table.SingleRow


Mengembalikan baris tunggal dalam jadual.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Mengembalikan baris tunggal dalam satu baris `table`. Jika `table` mempunyai lebih daripada satu baris, ralat akan dipaparkan.


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
