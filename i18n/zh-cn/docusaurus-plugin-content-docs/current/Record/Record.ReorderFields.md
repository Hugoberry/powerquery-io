---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

将指定的字段重新排序为新顺序。


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

按列表 <code>fieldOrder</code> 中指定的字段顺序将 <code>record</code> 中的字段重新排序后，返回一个记录。字段值保持不变，<code>fieldOrder</code> 中未列出的字段仍留在原始位置。


## Examples

### Example #1 
将记录中的部分字段重新排序。
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
