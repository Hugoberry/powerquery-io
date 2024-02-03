---
title: List.Intersect
---

# List.Intersect


## Description

입력에 있는 목록 값의 교집합을 반환합니다.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

입력 목록 <code>lists</code>에 있는 목록 값의 교집합을 반환합니다. 선택적 매개 변수 <code>equationCriteria</code>을(를) 지정할 수 있습니다.


## Examples

### Example #1 
목록 \{1..5}, \{2..6}, \{3..7}의 교집합을 찾습니다.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
