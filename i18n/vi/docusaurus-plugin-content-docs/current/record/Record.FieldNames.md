---
title: Record.FieldNames
---

# Record.FieldNames


Trả về tên của các trường.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Trả về tên của các trường trong bản ghi <code>record</code> ở dạng văn bản.


## Examples

### Example #1 
Trả về tên của các trường trong bản ghi.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
