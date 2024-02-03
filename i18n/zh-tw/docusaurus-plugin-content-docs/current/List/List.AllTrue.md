---
title: List.AllTrue
---

# List.AllTrue


## Description

如果所有運算式都是 True，即傳回 True。


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

如果清單 <code>list</code> 中的所有運算式都是 True，即傳回 True。


## Examples

### Example #1 
判斷清單 \{true, true, 2 &gt; 0} 中是否所有運算式都是 True。
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
判斷清單 \{true, true, 2 &lt; 0} 中是否所有運算式都是 True。
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
