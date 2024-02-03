---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Alanların adlarını döndürür.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

<code>record</code> kaydındaki alanların adını metin olarak döndürür.


## Examples

### Example #1 
Kayıttaki alanların adlarını bulur.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
