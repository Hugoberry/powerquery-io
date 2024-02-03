---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Palauttaa kenttien nimet.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Palauttaa tietueen <code>record</code> kenttien nimet tekstinä.


## Examples

### Example #1 
Selvitä kenttien nimet tietueessa.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
