---
title: Record.FieldNames
---

# Record.FieldNames


फ़ील्ड के नाम लौटाता है.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

रिकॉर्ड <code>record</code> की फ़ील्ड के नामों को पाठ के रूप में लौटाता है.


## Examples

### Example #1 
रिकॉर्ड में फ़ील्ड का नाम ढूँढें.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
