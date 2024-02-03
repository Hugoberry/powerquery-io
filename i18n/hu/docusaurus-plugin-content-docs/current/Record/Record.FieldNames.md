---
title: Record.FieldNames
---

# Record.FieldNames


## Description

A mezők nevét adja vissza.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

A(z) <code>record</code> rekord mezőinek nevét adja vissza szövegként.


## Examples

### Example #1 
Megállapítja a rekordban levő mezők nevét.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
