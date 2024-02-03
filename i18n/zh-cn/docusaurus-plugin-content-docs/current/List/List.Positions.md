---
title: List.Positions
---

# List.Positions


## Description

返回输入的偏移量列表。


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

返回输入列表 <code>list</code> 的偏移量列表。    使用 List.Transform 更改列表时，可以使用位置列表来授予对位置的转换权限。


## Examples

### Example #1 
查找列表 \{1, 2, 3, 4, null, 5} 中值的偏移量。
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
