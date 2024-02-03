---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

지정된 위치에서 시작하여 지정된 개수만큼의 값을 대체 값으로 바꿉니다.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

<code>list</code>의 <code>count</code> 값을 지정된 위치 <code>index</code>부터 목록 <code>replaceWith</code>(으)로 바꿉니다.


## Examples

### Example #1 
\{1, 2, 7, 8, 9, 5} 목록의 \{7, 8, 9}를 \{3, 4}로 바꿉니다.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
