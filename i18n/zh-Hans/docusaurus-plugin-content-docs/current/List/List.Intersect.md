---
title: List.Intersect
---

# List.Intersect


返回在输入中找到的列表值的交集。


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

返回在输入列表 <code>lists</code> 中找到的列表值的交集。可以指定可选参数 <code>equationCriteria</code>。


## Examples

### Example #1 
查找列表 \{1..5}、\{2..6}、\{3..7} 的交集。
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
