---
title: Table.SingleRow
---

# Table.SingleRow


Returnează un singur rând din tabel.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Returnează un singur rând în `table` cu un rând. Dacă `table` conține mai multe rânduri, se generează o eroare.


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
