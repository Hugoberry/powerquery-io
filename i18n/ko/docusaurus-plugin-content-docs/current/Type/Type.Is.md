---
title: Type.Is
---

# Type.Is


## Description

첫 번째 유형의 값이 항상 두 번째 유형과 호환되는지 여부를 판별합니다.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

<code>type1</code> 값이 항상 <code>type2</code>와(과) 호환되는지 여부를 결정합니다.


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
