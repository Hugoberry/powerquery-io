---
title: Type.Is
---

# Type.Is


첫 번째 유형의 값이 항상 두 번째 유형과 호환되는지 여부를 판별합니다.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

`type1` 값이 항상 `type2` 호환되는지 여부를 결정합니다. 매개 변수 `type2` 기본(또는 null 허용 기본) 형식 값이어야 합니다. 그렇지 않으면 이 함수의 동작이 정의되지 않으며 켜지지 않아야 합니다.


## Examples

### Example #1
유형 숫자 의 값이 항상 유형 any로 처리될 수 있는지 확인합니다.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
any 유형의 값이 항상 유형 번호로 처리될 수 있는지 확인합니다.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
