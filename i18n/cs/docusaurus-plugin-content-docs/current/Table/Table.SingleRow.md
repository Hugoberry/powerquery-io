---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Vrátí jeden řádek v tabulce.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Vrátí jeden řádek v jednořádkové tabulce <code>table</code>. Pokud má tabulka <code>table</code> více než jeden řádek, je vyvolána výjimka.


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
