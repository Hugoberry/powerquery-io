---
title: Table.SingleRow
---

# Table.SingleRow


Retorna a única linha da tabela.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Retorna a única linha na linha única `table`. Se o `table` tiver mais de uma linha, um erro será gerado.


## Examples

### Example #1
Localizar a única linha da tabela.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
