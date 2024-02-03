---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Zwraca nazwy pól.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Zwraca nazwy pól w rekordzie <code>record</code> jako tekst.


## Examples

### Example #1 
Znajdź nazwy pól w rekordzie.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
