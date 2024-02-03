---
title: List.Difference
---

# List.Difference


## Description

返回两个给定列表的差。


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

返回未出现在列表 <code>list2</code> 中的列表 <code>list1</code> 中的项。支持重复的值。    可以指定一个可选相等条件值 <code>equationCriteria</code> 来控制相等测试。 


## Examples

### Example #1 
查找列表 \{1, 2, 3, 4, 5} 中未出现在 \{4, 5, 3} 中的项。
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
查找列表 \{1, 2} 中未出现在 \{1, 2, 3} 中的项。
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
