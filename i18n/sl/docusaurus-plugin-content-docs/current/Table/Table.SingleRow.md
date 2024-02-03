---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Vrne eno vrstico v tabeli.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Vrne eno vrstico v tabeli <code>table</code> z eno vrstico. Če ima tabela <code>table</code> več kot eno vrstico, pride do izjeme.


## Examples

### Example #1 
Vrnite eno vrstico v tabeli.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
