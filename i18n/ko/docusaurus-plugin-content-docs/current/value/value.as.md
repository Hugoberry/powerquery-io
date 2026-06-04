---
title: Value.As
---

# Value.As


지정된 형식과 호환되는 경우 값을 반환합니다.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

지정된 형식과 호환되는 경우 값을 반환합니다. Number.Type과 같은 식별자 형식 참조를 수락할 수 있다는 점을 제외하고 M의 "as" 연산자와 동일합니다.


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
