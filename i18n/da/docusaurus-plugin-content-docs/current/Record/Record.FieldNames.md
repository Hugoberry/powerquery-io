---
title: Record.FieldNames
---

# Record.FieldNames


Returnerer navnene på felterne.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Returnerer navnene på felterne i posten <code>record</code> som tekst.


## Examples

### Example #1 
Find navnene på felterne i posten.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
