---
title: List.SingleOrDefault
---

# List.SingleOrDefault


对于长度为 1 的列表返回一个列表项，对于空列表返回默认值。


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

如果列表 <code>list</code> 中只有一项，则返回该项。    如果列表为空，函数将返回 null，除非指定了可选的 <code>default</code>。如果列表中有多项，函数将返回错误。


## Examples

### Example #1 
在列表 \{1} 中查找单个值。
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
在列表 \{} 中查找单个值。
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
在列表 \{} 中查找单个值。如果为空，则返回 -1。
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
