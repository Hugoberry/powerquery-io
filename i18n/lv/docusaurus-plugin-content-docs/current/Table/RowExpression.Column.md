---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Atgriež abstraktu sintakses koku (AST), kas apzīmē piekļuvi kolonnai rindas izteiksmē.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Atgriež abstraktu sintakses koku (AST), kas apzīmē piekļuvi rindas <code>columnName</code> kolonnai rindas izteiksmē.


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
