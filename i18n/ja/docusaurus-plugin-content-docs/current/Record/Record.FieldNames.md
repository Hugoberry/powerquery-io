---
title: Record.FieldNames
---

# Record.FieldNames


フィールドの名前を返します。


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

レコード <code>record</code> 内のフィールドの名前をテキストとして返します。


## Examples

### Example #1 
レコード内のフィールドの名前を調べます。
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
