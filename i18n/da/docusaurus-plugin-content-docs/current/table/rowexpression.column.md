---
title: RowExpression.Column
---

# RowExpression.Column


Returnerer et abstrakt syntakstræ (AST), der repræsenterer adgang til en kolonne i et rækkeudtryk.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Returnerer et abstrakt syntakstræ (AST), der repræsenterer adgang til kolonne `columnName` af rækken i et rækkeudtryk.


## Examples

### Example #1
Opretter en AST, der repræsenterer adgang til kolonnen "CustomerName".
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
