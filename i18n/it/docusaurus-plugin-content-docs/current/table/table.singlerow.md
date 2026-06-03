---
title: Table.SingleRow
---

# Table.SingleRow


Restituisce l'unica riga della tabella.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Restituisce l'unica riga di `table` a una sola riga. Se `table` contiene più di una riga, verrà generato un errore.


## Examples

### Example #1
Restituire l'unica riga della tabella.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
