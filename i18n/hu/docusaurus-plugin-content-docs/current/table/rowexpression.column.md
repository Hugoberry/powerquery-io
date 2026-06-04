---
title: RowExpression.Column
---

# RowExpression.Column


Egy olyan absztrakt szintaxisfát (AST) ad vissza, amely egy oszlophoz való hozzáférést jelöli egy sorkifejezésen belül.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Egy olyan absztrakt szintaxisfát ad vissza, amely a(z) `columnName` oszlophoz való hozzáférést jelöli egy sorkifejezésen belül.


## Examples

### Example #1
Létrehoz egy, a „CustomerName” oszlophoz való hozzáférést jelölő AST-t.
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
