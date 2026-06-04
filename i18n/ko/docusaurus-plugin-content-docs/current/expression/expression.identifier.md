---
title: Expression.Identifier
---

# Expression.Identifier


식별자의 M 소스 코드 표현을 반환합니다.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

식별자 `name`의 M 소스 코드 표현을 반환합니다.


## Examples

### Example #1
식별자의 M 소스 코드 표현을 가져옵니다.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2
공백을 포함하는 식별자의 M 소스 코드 표현을 가져옵니다.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
