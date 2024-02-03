---
title: Value.Is
---

# Value.Is


## Description

값이 지정된 유형과 호환되는지 여부를 판별합니다.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

값이 지정된 유형과 호환되는지 여부를 판별합니다. 이것은 Number.Type과 같은 식별자 유형 참조를 허용할 수 있다는 점을 제외하고 M의 "is" 연산자와 동일합니다.


## Examples

### Example #1 
숫자가 유형 숫자와 호환되는지 확인하는 두 가지 방법을 비교하세요.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
