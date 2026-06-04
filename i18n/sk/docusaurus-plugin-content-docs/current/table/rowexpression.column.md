---
title: RowExpression.Column
---

# RowExpression.Column


Vráti abstraktný strom syntaxe (AST), ktorý predstavuje prístup k stĺpcu vo výraze riadka.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Vráti abstraktný strom syntaxe (AST), ktorý predstavuje prístup k stĺpcu `columnName` riadka vo výraze riadka.


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
