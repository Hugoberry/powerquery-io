---
title: List.AnyTrue
---

# List.AnyTrue


## Description

如果任意表达式为 true，则返回 true。


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

如果列表 <code>list</code> 中的任意表达式为 true，则返回 true。


## Examples

### Example #1 
确定列表 \{true, false, 2 &gt; 0} 中的任意表达式是否为 true。
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
确定列表 \{2 = 0, false, 2 &lt; 0} 中的任意表达式是否为 true。
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
