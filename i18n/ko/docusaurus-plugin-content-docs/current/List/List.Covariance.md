---
title: List.Covariance
---

# List.Covariance


## Description

두 숫자 목록 간의 공 분산을 반환합니다.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

두 목록 <code>numberList1</code>과(와) <code>numberList2</code> 간의 공 분산을 반환합니다. <code>numberList1</code>과(와) <code>numberList2</code>에 동일한 수의 <code>number</code> 값이 포함되어 있어야 합니다.


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
