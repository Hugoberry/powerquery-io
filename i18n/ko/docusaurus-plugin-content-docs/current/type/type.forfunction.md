---
title: Type.ForFunction
---

# Type.ForFunction


특정 매개 변수 및 반환 형식 제약 조건을 가진 함수를 나타내는 형식을 반환합니다.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

`ReturnType` 및 `Parameters`의 레코드인 `signature` 및 함수를 호출하는 데 필요한 최소 인수 개수인 `min`에서 `함수 형식`을 만듭니다.


## Examples

### Example #1
X라는 숫자 매개 변수를 사용하고 숫자를 반환하는 함수의 형식을 만듭니다.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
