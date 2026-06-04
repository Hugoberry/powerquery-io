---
title: Record.FieldNames
---

# Record.FieldNames


Επιστρέφει τα ονόματα των πεδίων.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Επιστρέφει τα ονόματα των πεδίων στην εγγραφή `record` ως κείμενο.


## Examples

### Example #1
Βρίσκει τα ονόματα των πεδίων στην εγγραφή.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
