---
title: Record.FieldNames
---

# Record.FieldNames


Restituisce i nomi dei campi.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Restituisce come testo i nomi dei campi nel record <code>record</code>.


## Examples

### Example #1 
Trovare i nomi dei campi nel record.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
