---
title: Table.SingleRow
---

# Table.SingleRow


Retorna la fila única de la taula.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Retorna la fila única de l'única fila `table`. Si `table` té més d'una fila, es produeix un error.


## Examples

### Example #1
Retorna la fila única de la taula.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
