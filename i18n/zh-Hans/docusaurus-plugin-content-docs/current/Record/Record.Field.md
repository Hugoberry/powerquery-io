---
title: Record.Field
---

# Record.Field


返回记录中指定字段的值。


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

返回 `field` 中指定 `record` 的值。如果未找到该字段，则引发错误。


## Examples

### Example #1
在记录中查找字段 "CustomerID" 的值。
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
