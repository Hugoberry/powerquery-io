---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Retorna la fila única de la taula.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Retorna la fila única de l'única fila <code>table</code>. Si la <code>table</code> té més d'una fila, es produeix una excepció.


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
