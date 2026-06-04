---
title: Table.SingleRow
---

# Table.SingleRow


Devolve a única fila na táboa.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Devolve a única fila na fila `table`. Se `table` ten máis dunha fila, xérase un erro.


## Examples

### Example #1
Buscar unha fila determinada na táboa.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
