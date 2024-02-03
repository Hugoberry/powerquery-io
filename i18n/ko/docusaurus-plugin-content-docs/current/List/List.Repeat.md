---
title: List.Repeat
---

# List.Repeat


## Description

원래 목록을 일정 횟수 반복한 목록을 반환합니다.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

원래 목록 <code>list</code>을(를) <code>count</code>번 반복한 목록을 반환합니다.


## Examples

### Example #1 
\{1, 2}가 3번 반복된 목록을 만듭니다.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
