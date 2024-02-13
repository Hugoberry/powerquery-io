---
title: List.AnyTrue
---

# List.AnyTrue


いずれかの式が true の場合に true を返します。


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

リスト <code>list</code> 内のいずれかの式が true の場合に true を返します。


## Examples

### Example #1 
リスト \{true, false, 2 &gt; 0} 内のいずれかの式が true かどうかを判断します。
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{2 = 0, false, 2 &lt; 0} 内のいずれかの式が true かどうかを判断します。
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
