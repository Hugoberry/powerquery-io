---
title: List.AllTrue
---

# List.AllTrue


## Description

모든 식이 true일 경우 true를 반환합니다.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

<code>list</code> 목록의 모든 식이 true일 경우 true를 반환합니다.


## Examples

### Example #1 
\{true, true, 2 &gt; 0} 목록의 모든 식이 true인지 여부를 확인합니다.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
\{true, true, 2 &lt; 0} 목록의 모든 식이 true인지 여부를 확인합니다.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
