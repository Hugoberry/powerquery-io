---
title: Record.RemoveFields
---

# Record.RemoveFields


从输入记录中删除指定的字段。


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

返回一个记录，该记录从输入 `record` 中移除列表 `fields` 中指定的所有字段。如果指定的字段不存在，则引发错误。


## Examples

### Example #1
从记录中删除字段 "Price"。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
从记录中删除字段 "Price" 和 "Item"。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
