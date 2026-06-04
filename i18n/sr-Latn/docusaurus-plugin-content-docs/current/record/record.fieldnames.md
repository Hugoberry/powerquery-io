---
title: Record.FieldNames
---

# Record.FieldNames


Vraća imena polja.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Vraća imena polja u zapisu `record` kao tekst.


## Examples

### Example #1
Pronalaženje imena polja u zapisu.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
