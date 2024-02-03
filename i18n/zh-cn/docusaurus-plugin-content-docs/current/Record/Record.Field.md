---
title: Record.Field
---

# Record.Field


## Description

返回记录中指定字段的值。


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

返回 <code>record</code> 中指定 <code>field</code> 的值。如果未找到该字段，将引发异常。


## Examples

### Example #1 
在记录中查找字段 &#34;CustomerID&#34; 的值。
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
