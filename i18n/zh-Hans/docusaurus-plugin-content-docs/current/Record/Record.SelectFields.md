---
title: Record.SelectFields
---

# Record.SelectFields


返回只包含指定字段的记录。


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

从输入 <code>record</code> 返回一个记录，该记录仅包含在列表 <code>fields</code> 中指定的字段。


## Examples

### Example #1 
在记录中选择字段 &#34;Item&#34; 和 &#34;Price&#34;。
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
