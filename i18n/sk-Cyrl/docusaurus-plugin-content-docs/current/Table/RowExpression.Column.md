---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Vráti abstraktný strom syntaxe (AST), ktorý predstavuje prístup k stĺpcu vo výraze riadka.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Vráti abstraktný strom syntaxe (AST), ktorý predstavuje prístup k stĺpcu <code>columnName</code> riadka vo výraze riadka.


## Examples

### Example #1 
Vytvorí hodnotu AST, ktorá predstavuje prístup stĺpca „CustomerName“.
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
