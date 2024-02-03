---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Devuelve la única fila de la tabla.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Devuelve la única fila de fila uno <code>table</code>. Si la <code>table</code> tiene más de una fila, se inicia una excepción.


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
