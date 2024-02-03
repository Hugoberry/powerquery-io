---
title: Expression.Constant
---

# Expression.Constant


## Description

상수 값의 M 소스 코드 표현을 반환합니다.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

상수 값의 M 소스 코드 표현을 반환합니다.


## Examples

### Example #1 
숫자 값의 M 소스 코드 표현을 가져옵니다.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
날짜 값의 M 소스 코드 표현을 가져옵니다.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
텍스트 값의 M 소스 코드 표현을 가져옵니다.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
