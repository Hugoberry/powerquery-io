---
title: List.AllTrue
---

# List.AllTrue


## Description

如果所有表达式均为 true，则返回 true。


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

如果列表 <code>list</code> 中的所有表达式均为 true，则返回 true。


## Examples

### Example #1 
确定列表 \{true, true, 2 &gt; 0} 中的所有表达式是否均为 true。
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
确定列表 \{true, true, 2 &lt; 0} 中的所有表达式是否均为 true。
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
