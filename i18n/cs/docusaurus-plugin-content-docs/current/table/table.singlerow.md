---
title: Table.SingleRow
---

# Table.SingleRow


Vrátí jeden řádek v tabulce.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Vrátí jeden řádek v jednořádkové tabulce `table`. Pokud má tabulka `table` více než jeden řádek, vyvolá se chyba.


## Examples

### Example #1
Vrátí jeden řádek v tabulce.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
