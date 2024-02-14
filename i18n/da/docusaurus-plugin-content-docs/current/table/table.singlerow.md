---
title: Table.SingleRow
---

# Table.SingleRow


Returnerer den eneste række i tabellen.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Returnerer den eneste række i den ene række <code>table</code>. Hvis <code>table</code> indeholder mere end én række, udløses der en undtagelse.


## Examples

### Example #1 
Find den ene række i tabellen.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
