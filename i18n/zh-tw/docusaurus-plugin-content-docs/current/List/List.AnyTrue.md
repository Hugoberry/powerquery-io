---
title: List.AnyTrue
---

# List.AnyTrue


## Description

如果任何運算式是 True，即傳回 True。


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

如果清單 <code>list</code> 中的任何運算式是 True，即傳回 True。


## Examples

### Example #1 
判斷清單 \{true, false, 2 &gt; 0} 中是否有任何運算式是 True。
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
判斷清單 \{2 = 0, false, 2 &lt; 0} 中是否有任何運算式是 True。
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
