---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Returnează un singur rând din tabel.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Returnează un singur rând în <code>table</code> cu un rând. Dacă <code>table</code> conţine mai multe rânduri, apare o excepţie.


## Examples

### Example #1 
Returnează un singur rând din tabel.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
