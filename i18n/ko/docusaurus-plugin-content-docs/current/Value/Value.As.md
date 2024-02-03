---
title: Value.As
---

# Value.As


## Description

지정된 유형과 호환되는 경우 값을 반환합니다.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

지정된 유형과 호환되는 경우 값을 반환합니다. 이것은 Number.Type과 같은 식별자 유형 참조를 허용할 수 있다는 점을 제외하고 M의 "as" 연산자와 동일합니다.


## Examples

### Example #1 
숫자를 숫자로 캐스팅합니다.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
텍스트 값을 숫자로 변환하려고 합니다.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
