---
title: List.Min
---

# List.Min


## Description

返回最小值，对于空列表则返回默认值。


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

返回列表 <code>list</code> 中的最小项；如果列表为空，则返回可选的默认值 <code>default</code>。    可以指定可选的 comparisonCriteria 值 <code>comparisonCriteria</code> 来确定如何在列表中比较项。如果此参数为 null，将使用默认比较器。


## Examples

### Example #1 
查找列表 \{1, 4, 7, 3, -2, 5} 中的最小值。
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
查找列表 \{} 中的最小值，如果列表为空，则返回 -1。
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
