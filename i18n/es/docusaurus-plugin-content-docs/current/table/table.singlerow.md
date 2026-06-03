---
title: Table.SingleRow
---

# Table.SingleRow


Devuelve la única fila de la tabla.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Devuelve la única fila de la fila `table`. Si el `table` tiene más de una fila, se produce un error.


## Examples

### Example #1
Devolver la fila única de la tabla.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
