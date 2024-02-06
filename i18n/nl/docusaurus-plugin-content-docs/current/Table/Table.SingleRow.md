---
title: Table.SingleRow
---

# Table.SingleRow


Retourneert één rij uit de tabel.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Retourneert de enkele rij in de ene rij <code>table</code>. Als er in de <code>table</code> meer rijen staan, wordt er een uitzondering gegenereerd.


## Examples

### Example #1 
De rij in de tabel retourneren.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
