---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Retorna a única linha da tabela.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Retorna a única linha da única <code>table</code> de linhas. Se a <code>table</code> tiver mais de uma linha, uma exceção será lançada.


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
