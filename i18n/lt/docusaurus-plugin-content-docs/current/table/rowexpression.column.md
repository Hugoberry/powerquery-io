---
title: RowExpression.Column
---

# RowExpression.Column


Pateikia abstrakčiosios sintaksės medį (AST), nurodantį prieigą prie stulpelio eilutės reiškinyje.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Pateikia abstrakčiosios sintaksės medį (AST), nurodantį prieigą prie eilutės stulpelio `columnName` eilutės reiškinyje.


## Examples

### Example #1
Sukuriamas AST, nurodantis prieigą prie stulpelio CustomerName.
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
