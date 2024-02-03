---
title: List.First
---

# List.First


## Description

返回列表的第一个值；如果为空，则返回指定的默认值。


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

返回列表 <code>list</code> 中的第一个项；如果列表为空，则返回可选的默认值 <code>defaultValue</code>。    如果列表为空且未指定默认值，函数将返回 <code>null</code>。


## Examples

### Example #1 
查找列表 \{1, 2, 3} 中的第一个值。
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
查找列表 \{} 中的第一个值。如果列表为空，则返回 -1。
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
