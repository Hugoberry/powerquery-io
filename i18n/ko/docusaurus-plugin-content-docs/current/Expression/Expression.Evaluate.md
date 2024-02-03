---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

M 식의 계산 결과를 반환합니다.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

<code>environment</code>에 정의된 참조할 수 있는 식별자를 사용하여 M 식 <code>document</code>의 계산 결과를 반환합니다.


## Examples

### Example #1 
단순한 합계를 계산합니다.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
더 복잡한 합계를 계산합니다.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
식별자를 사용하여 텍스트 값의 연결을 평가합니다.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
