---
title: List.Combine
---

# List.Combine


## Description

여러 목록을 결합하여 단일 목록을 반환합니다.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

목록의 목록 <code>lists</code>을(를) 인수로 받아 모든 목록을 새 단일 목록으로 병합합니다.


## Examples

### Example #1 
간단한 두 개의 목록 \{1, 2}와 \{3, 4}를 결합합니다.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
두 개의 목록 \{1, 2}와 \{3, \{4, 5}}를 결합합니다. 이 중 하나에는 중첩된 목록이 포함되어 있습니다.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
