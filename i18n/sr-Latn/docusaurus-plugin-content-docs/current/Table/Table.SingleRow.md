---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Vraća jedini red iz tabele.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Vraća jedini red u jednom redu <code>table</code>. Ako <code>table</code> ima više redova, vraća se izuzetak.


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
