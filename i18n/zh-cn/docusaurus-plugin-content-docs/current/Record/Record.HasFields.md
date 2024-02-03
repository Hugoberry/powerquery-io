---
title: Record.HasFields
---

# Record.HasFields


## Description

指示记录是否具有指定的字段。


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

通过返回逻辑值(true 或 false)，指示记录 <code>record</code> 是否具有 <code>fields</code> 中指定的字段。    可以使用列表指定多个字段值。


## Examples

### Example #1 
检查记录是否包含字段 &#34;CustomerID&#34;。
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
检查记录是否包含字段 &#34;CustomerID&#34; 和 &#34;Address&#34;。
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
