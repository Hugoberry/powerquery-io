---
title: List.Transform
---

# List.Transform


返回从此列表计算的值的新列表。


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

通过将转换函数 <code>transform</code> 应用到列表 <code>list</code> 来返回值的新列表。


## Examples

### Example #1 
将 1 与列表 \{1, 2} 中的每个值相加。
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
