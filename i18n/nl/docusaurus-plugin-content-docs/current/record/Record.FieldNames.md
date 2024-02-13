---
title: Record.FieldNames
---

# Record.FieldNames


Retourneert de namen van de velden.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Retourneert de namen van de velden in de record <code>record</code> als tekst.


## Examples

### Example #1 
De namen van de velden in de record zoeken.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
