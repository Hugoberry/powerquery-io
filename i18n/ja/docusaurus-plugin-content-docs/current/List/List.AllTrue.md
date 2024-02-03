---
title: List.AllTrue
---

# List.AllTrue


## Description

すべての式が true の場合に true を返します。


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

リスト <code>list</code> 内のすべての式が true の場合に true を返します。


## Examples

### Example #1 
リスト \{true, true, 2 &gt; 0} 内のすべての式が true かどうかを判断します。
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{true, true, 2 &lt; 0} 内のすべての式が true かどうかを判断します。
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
