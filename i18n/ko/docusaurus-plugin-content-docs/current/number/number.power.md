---
title: Number.Power
---

# Number.Power


숫자를 지정된 지수로 거듭제곱합니다.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

`number`을(를) `power`제곱한 결과를 반환합니다. `number` 또는 `power`이(가) Null인 경우 `Number.Power`는 Null을 반환합니다.

-   `number`: 밑입니다.
-   `power`: 지수입니다.


## Examples

### Example #1
5의 3제곱을 구합니다.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
