---
title: Record.FromList
---

# Record.FromList


## Description

根据给定的一个字段值列表和一组字段，返回一个记录。


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

根据给定的一个字段值 <code>list</code> 和一组字段，返回一个记录。 可以通过文本值列表或记录类型指定 <code>fields</code>。 如果字段不是唯一的，将引发错误。


## Examples

### Example #1 
从一个字段值列表和字段名称列表生成一个记录。
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
从一个字段值列表和记录类型生成一个记录。
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
