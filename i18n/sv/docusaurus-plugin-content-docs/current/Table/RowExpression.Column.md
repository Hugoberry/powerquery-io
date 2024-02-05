---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Returnerar ett abstrakt syntaxträd (AST) som representerar åtkomst till en kolumn i ett raduttryck.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Returnerar ett abstrakt syntaxträd (AST) som representerar åtkomst till kolumn <code>columnName</code> av raden i ett raduttryck.


## Examples

### Example #1 
Skapar ett AST-uttryck som representerar åtkomst till kolumnen CustomerName.
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
