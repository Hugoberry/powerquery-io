---
title: RowExpression.Column
---

# RowExpression.Column


Atgriež abstraktu sintakses koku (AST), kas apzīmē piekļuvi kolonnai rindas izteiksmē.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Atgriež abstraktu sintakses koku (AST), kas apzīmē piekļuvi rindas `columnName` kolonnai rindas izteiksmē.


## Examples

### Example #1
Izveido AST, kas apzīmē kolonnas “CustomerName” piekļuvi.
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
