---
title: List.PositionOf
---

# List.PositionOf


返回列表中值的偏移量。


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

返回值 <code>value</code> 在列表 <code>list</code> 中出现时的偏移量。如果值未出现，则返回 -1。    可以指定可选的出现次数参数 <code>occurrence</code>。<ul>   <li><code>occurrence</code>: 要报告的最大出现次数。</li></ul>


## Examples

### Example #1 
查找列表 \{1, 2, 3} 中出现值 3 的位置。
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
