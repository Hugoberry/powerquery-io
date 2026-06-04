---
title: Table.SingleRow
---

# Table.SingleRow


Palauttaa yksittäisen rivin taulukossa.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Palauttaa yksittäisen rivin yhdellä rivillä (`table`). `table` Jos rivejä on useita, esiin tulee virhe.


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
