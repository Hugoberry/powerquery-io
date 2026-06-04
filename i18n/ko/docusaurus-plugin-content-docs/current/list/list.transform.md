---
title: List.Transform
---

# List.Transform


이 목록에서 계산된 새 값 목록을 반환합니다.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

`list` 목록에 변환 함수 `transform`을(를) 적용하여 새 값 목록을 반환합니다.


## Examples

### Example #1
\{1, 2\} 목록의 각 값에 1을 더합니다.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
