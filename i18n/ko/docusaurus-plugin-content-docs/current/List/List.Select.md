---
title: List.Select
---

# List.Select


## Description

조건과 일치하는 값의 목록을 반환합니다.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

<code>list</code> 목록에서 선택 조건 <code>selection</code>과(와) 일치하는 값의 목록을 반환합니다.


## Examples

### Example #1 
\{1, -3, 4, 9, -2} 목록에서 0보다 큰 값을 찾습니다.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
