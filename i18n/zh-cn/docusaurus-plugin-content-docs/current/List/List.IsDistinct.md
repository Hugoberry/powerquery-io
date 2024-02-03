---
title: List.IsDistinct
---

# List.IsDistinct


## Description

指示列表中是否有重复值。


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

返回一个指示列表 <code>list</code> 中是否有重复值的逻辑值；如果列表没有重复值，则为 <code>true</code>，否则为 <code>false</code>。


## Examples

### Example #1 
查看列表 \{1, 2, 3} 是否具有独特性(即 没有重复值)。
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
查看列表 \{1, 2, 3, 3} 是否具有独特性(即 没有重复值)。
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
