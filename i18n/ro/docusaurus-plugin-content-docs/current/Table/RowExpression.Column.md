---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Returnează un arbore sintactic abstract (AST) care reprezintă accesul la o coloană dintr-o expresie de linie.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Returnează un arbore sintactic abstract (AST) care reprezintă accesul la coloana <code>columnName</code> a înregistrării dintr-o expresie de linie.


## Examples

### Example #1 
Creează un AST ce reprezintă accesul la coloana „NumeClient”.
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
