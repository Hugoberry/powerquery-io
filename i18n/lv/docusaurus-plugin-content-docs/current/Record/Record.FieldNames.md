---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Tiek atgriezti lauku nosaukumi.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Teksta formātā tiek atgriezti ieraksta <code>record</code> lauku nosaukumi.


## Examples

### Example #1 
Iegūstiet ieraksta lauku nosaukumus.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
