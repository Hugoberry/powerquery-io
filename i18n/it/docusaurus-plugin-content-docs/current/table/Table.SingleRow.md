---
title: Table.SingleRow
---

# Table.SingleRow


Restituisce l&#39;unica riga della tabella.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Restituisce l'unica riga di <code>table</code> a una sola riga. Se <code>table</code> contiene più di una riga, verrà generata un'eccezione.


## Examples

### Example #1 
Restituire l&#39;unica riga della tabella.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
