---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Mengembalikan pepohon sintaks abstrak (AST) yang mewakili capaian kepada lajur dalam ungkapan baris.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Mengembalikan pepohon sintaks abstrak (AST) yang mewakili capaian kepada lajur <code>columnName</code> daripada baris dalam ungkapan baris.


## Examples

### Example #1 
Mencipta AST menunjukkan capaian bagi lajur &#34;CustomerName&#34;.
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
