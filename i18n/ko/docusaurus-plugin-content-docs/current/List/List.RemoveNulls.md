---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

지정된 목록에서 모든 &#34;null&#34; 값을 제거합니다.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

<code>list</code>에서 모든 "null" 값을 제거합니다. 목록에 'null' 값이 없으면 원래 목록이 반환됩니다.


## Examples

### Example #1 
\{1, 2, 3, null, 4, 5, null, 6} 목록에서 &#34;null&#34; 값을 제거합니다.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
