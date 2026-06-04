---
title: ItemExpression.From
---

# ItemExpression.From


함수 본문에 대한 AST(요약 구문 트리)를 반환합니다.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

*항목 식*으로 정규화된 `function`의 본문에 대한 AST(추상 구문 트리)를 반환합니다.

-   함수는 인수가 1개인 람다여야 합니다.
-   함수 매개 변수에 대한 모든 참조는 `ItemExpression.Item`으로 바뀝니다.
-   AST는 다음 종류의 노드만 포함하도록 간소화됩니다.
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function`의 본문에 대해 항목 식 AST를 반환할 수 없는 경우 오류가 발생합니다.  
  
이 함수는 `RowExpression.From`과 동일합니다.


## Examples

### Example #1
`each _ <> null` 함수의 본문에 대한 AST를 반환합니다.
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction
