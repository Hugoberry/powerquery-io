---
title: RowExpression.Column
---

# RowExpression.Column


Returns an abstract syntax tree (AST) that represents access to a column within a row expression.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Returns an abstract syntax tree (AST) that represents access to column `columnName` of the row within a row expression.


## Examples

### Example #1
Creates an AST representing access of column "CustomerName".
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
