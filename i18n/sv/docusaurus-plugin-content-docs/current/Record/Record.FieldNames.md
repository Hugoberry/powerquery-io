---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Returnerar namnen på fälten.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Returnerar namnen på fälten i posten <code>record</code> som text.


## Examples

### Example #1 
Hitta namnen på fälten i posten.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
