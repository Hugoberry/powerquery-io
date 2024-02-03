---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

从输入记录中删除指定的字段。


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

返回一个记录，该记录从输入 <code>record</code> 中删除列表 <code>fields</code> 中指定的所有字段。如果指定的字段不存在，将引发异常。


## Examples

### Example #1 
从记录中删除字段 &#34;Price&#34;。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
从记录中删除字段 &#34;Price&#34; 和 &#34;Item&#34;。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
