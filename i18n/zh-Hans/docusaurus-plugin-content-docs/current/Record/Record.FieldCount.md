---
title: Record.FieldCount
---

# Record.FieldCount


返回记录中的字段数。


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

返回记录 <code>record</code> 中的字段数。


## Examples

### Example #1 
查找记录中的字段数。
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
