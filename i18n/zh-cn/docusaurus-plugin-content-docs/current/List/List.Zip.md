---
title: List.Zip
---

# List.Zip


## Description

通过在多个列表的相同位置合并项来返回列表的列表。


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

提取列表的列表 <code>lists</code>，并通过在同一位置合并项返回列表的列表。


## Examples

### Example #1 
压缩两个简单列表 \{1, 2} 和 \{3, 4}。
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
压缩两个具有不同长度 \{1, 2} 和 \{3} 的简单列表。
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
