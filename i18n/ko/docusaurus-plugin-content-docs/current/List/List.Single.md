---
title: List.Single
---

# List.Single


## Description

목록 길이가 1인 경우 단일 목록 항목을 반환하고, 그렇지 않은 경우 예외를 발생시킵니다.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

<code>list</code> 목록에 항목이 하나만 있는 경우 해당 항목을 반환합니다.    목록에 항목이 둘 이상 있거나 목록이 비어 있으면 이 함수는 예외를 발생시킵니다.


## Examples

### Example #1 
\{1} 목록의 단일 값을 찾습니다.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
\{1, 2, 3} 목록의 단일 값을 찾습니다.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
