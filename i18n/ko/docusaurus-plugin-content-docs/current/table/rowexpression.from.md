---
title: RowExpression.From
---

# RowExpression.From


함수 본문에 대한 AST(요약 구문 트리)를 반환합니다.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

*행 식*으로 정규화된 `function`의 본문에 대한 AST(추상 구문 트리)를 반환합니다.

-   함수는 인수가 1개인 람다여야 합니다.
-   함수 매개 변수에 대한 모든 참조는 `RowExpression.Row`로 바뀝니다.
-   열에 대한 모든 참조 `RowExpression.Column(columnName)`으로 바뀝니다.
-   AST는 노드 종류만 포함하도록 단순화됩니다.
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function`의 본문에 대해 행 식 AST를 반환할 수 없는 경우 오류가 발생합니다.  
  
이 함수는 `ItemExpression.From`과 동일합니다.


## Examples

### Example #1
`each [CustomerID] = "ALFKI"` 함수의 본문에 대한 AST를 반환합니다.
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction
