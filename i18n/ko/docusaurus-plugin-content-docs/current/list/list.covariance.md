---
title: List.Covariance
---

# List.Covariance


두 숫자 목록 간의 공 분산을 반환합니다.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

두 목록 `numberList1`과(와) `numberList2` 간의 공 분산을 반환합니다. `numberList1`과(와) `numberList2`에 동일한 수의 `number` 값이 포함되어 있어야 합니다.


## Examples

### Example #1
두 목록 간의 공 분산을 계산합니다.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
