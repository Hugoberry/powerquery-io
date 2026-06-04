---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


지정된 변수의 값을 반환하거나 변수가 정의되지 않은 경우 기본값을 반환합니다.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

현재 평가 환경에서 정의한 지정된 변수 `identifier`의 값을 반환합니다. 변수가 정의되지 않은 경우 선택 사항인 `defaultValue`이(가) 반환됩니다.



## Category
Values.Implementation
