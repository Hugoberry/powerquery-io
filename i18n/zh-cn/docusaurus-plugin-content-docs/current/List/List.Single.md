---
title: List.Single
---

# List.Single


## Description

对于长度为 1 的列表返回一个列表项，否则引发异常。


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

如果列表 <code>list</code> 中只有一项，则返回该项。    如果列表中有多项或列表为空，函数将引发异常。


## Examples

### Example #1 
在列表 \{1} 中查找单个值。
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
在列表 \{1, 2, 3} 中查找单个值。
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
