---
title: RowExpression.Column
---

# RowExpression.Column


행 식 내의 열에 대한 액세스를 나타내는 AST(요약 구문 트리)를 반환합니다.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

행 식 내 행의 열 `columnName`에 대한 액세스를 나타내는 AST(요약 구문 트리)를 반환합니다.


## Examples

### Example #1
"CustomerName" 열의 액세스를 나타내는 AST를 만듭니다.
```powerquery
RowExpression.Column("CustomerName")
```

Result: 
```powerquery
[
    Kind = "FieldAccess",
    Expression = RowExpression.Row,
    MemberName = "CustomerName"
]
```




## Category
Table.Table construction
