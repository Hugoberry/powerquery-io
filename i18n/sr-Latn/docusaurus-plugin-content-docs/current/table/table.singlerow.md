---
title: Table.SingleRow
---

# Table.SingleRow


Vraća jedini red iz tabele.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Vraća jedini red u jednom redu `table`. Ako `table` ima više redova, prijavljuje se greška.


## Examples

### Example #1
Pronalaženje reda iz tabele.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
