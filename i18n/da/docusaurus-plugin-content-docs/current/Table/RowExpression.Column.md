---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Returnerer et abstrakt syntakstræ (AST), der repræsenterer adgang til en kolonne i et rækkeudtryk.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Returnerer et abstrakt syntakstræ (AST), der repræsenterer adgang til kolonne <code>columnName</code> af rækken i et rækkeudtryk.


## Examples

### Example #1 
Opretter en AST, der repræsenterer adgang til kolonnen &#34;CustomerName&#34;.
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
