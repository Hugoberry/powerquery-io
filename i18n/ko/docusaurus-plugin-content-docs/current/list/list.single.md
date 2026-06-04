---
title: List.Single
---

# List.Single


길이가 1인 목록에 대해 하나의 목록 항목을 반환하고, 그렇지 않으면 오류를 발생합니다.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

`list` 목록에 항목이 하나만 있는 경우 해당 항목을 반환합니다. 항목이 두 개 이상 있거나 목록이 비어 있으면 함수에서 오류가 발생합니다.


## Examples

### Example #1
\{1\} 목록의 단일 값을 찾습니다.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
\{1, 2, 3\} 목록의 단일 값을 찾습니다.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
