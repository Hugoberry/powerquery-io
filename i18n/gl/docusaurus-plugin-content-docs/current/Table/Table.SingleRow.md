---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Devolve a única fila na táboa.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Devolve a única fila na fila <code>table</code>. Se a <code>table</code> ten máis dunha fila, xérase unha excepción.


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
