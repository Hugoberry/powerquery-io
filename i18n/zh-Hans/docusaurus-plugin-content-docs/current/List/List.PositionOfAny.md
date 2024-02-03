---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

返回列表中值的第一个偏移量。


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

返回值在列表 <code>values</code> 中第一次出现的位置列表 <code>list</code> 中的偏移量。如果找不到该值，则返回 -1。    可以指定可选的出现次数参数 <code>occurrence</code>。<ul>   <li><code>occurrence</code>: 可以返回的最大出现次数。</li></ul>


## Examples

### Example #1 
查找列表 \{1, 2, 3} 中第一次出现值 2 或 3 的位置。
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
