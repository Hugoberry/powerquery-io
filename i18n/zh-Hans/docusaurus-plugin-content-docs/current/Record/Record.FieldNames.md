---
title: Record.FieldNames
---

# Record.FieldNames


返回字段的名称。


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

将记录 <code>record</code> 中的字段名称作为文本返回。


## Examples

### Example #1 
查找记录中字段的名称。
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
