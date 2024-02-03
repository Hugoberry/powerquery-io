---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Pateikia abstrakčiosios sintaksės medį (AST), nurodantį prieigą prie stulpelio eilutės reiškinyje.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Pateikia abstrakčiosios sintaksės medį (AST), nurodantį prieigą prie eilutės stulpelio <code>columnName</code> eilutės reiškinyje.


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
