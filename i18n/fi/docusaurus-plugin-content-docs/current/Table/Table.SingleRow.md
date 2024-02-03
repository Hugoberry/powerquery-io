---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Palauttaa yksittäisen rivin taulukossa.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Palauttaa yksittäisen rivin yhdellä rivillä (<code>table</code>). Jos kohteella <code>table</code> on useampi kuin yksi rivi, tapahtuu poikkeus.


## Examples

### Example #1 
Palauta yksittäinen rivi taulukossa.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
