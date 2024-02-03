---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Vrne imena polj.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Vrne imena polj v zapisu <code>record</code> kot besedilo.


## Examples

### Example #1 
Poiščite imena polj v zapisu.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
