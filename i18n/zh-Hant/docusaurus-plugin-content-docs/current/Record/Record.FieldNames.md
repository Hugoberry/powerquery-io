---
title: Record.FieldNames
---

# Record.FieldNames


傳回欄位的名稱。


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

以文字傳回記錄 <code>record</code> 中欄位的名稱。


## Examples

### Example #1 
找出記錄中欄位的名稱。
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
