---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


返回记录中指定字段的值，如果未找到该字段，则返回默认值。


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

返回记录 <code>record</code> 中指定字段 <code>field</code> 的值。如果未找到该字段，则返回可选的 <code>defaultValue</code>。


## Examples

### Example #1 
在记录中查找字段 &#34;Phone&#34; 的值，如果它不存在，则返回 null。
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
在记录中查找字段 &#34;Phone&#34; 的值，如果它不存在，则返回默认值。
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
