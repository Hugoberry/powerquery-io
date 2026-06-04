---
title: RowExpression.Column
---

# RowExpression.Column


Mengembalikan pepohon sintaks abstrak (AST) yang mewakili capaian kepada lajur dalam ungkapan baris.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Mengembalikan pepohon sintaks abstrak (AST) yang mewakili capaian kepada lajur `columnName` daripada baris dalam ungkapan baris.


## Examples

### Example #1
Mencipta AST menunjukkan capaian bagi lajur "CustomerName".
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
