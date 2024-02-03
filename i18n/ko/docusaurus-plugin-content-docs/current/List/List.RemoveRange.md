---
title: List.RemoveRange
---

# List.RemoveRange


## Description

지정된 위치에서 시작하여 지정된 개수만큼의 값을 제거합니다.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

<code>list</code>에서 지정된 위치 <code>index</code>부터 <code>count</code>개의 값을 제거합니다.


## Examples

### Example #1 
\{1, 2, 3, 4, -6, -2, -1, 5} 목록에서 인덱스 4부터 3개의 값을 제거합니다.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
