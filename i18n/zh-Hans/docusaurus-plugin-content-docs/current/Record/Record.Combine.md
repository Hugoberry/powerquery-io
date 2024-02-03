---
title: Record.Combine
---

# Record.Combine


## Description

组合给定列表中的记录。


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

组合给定 <code>records</code> 中的记录。如果 <code>records</code> 包含非记录值，将返回错误。


## Examples

### Example #1 
从记录创建组合记录。
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
