---
title: Table.SingleRow
---

# Table.SingleRow


Devolve a única linha na tabela.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Devolve a única linha na linha <code>table</code>. Se <code>table</code> tiver mais de uma linha, é emitida uma exceção.


## Examples

### Example #1 
Devolver a linha única na tabela.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
