---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Devolve unha árbore de sintaxe abstracta (AST) que representa o acceso a unha columna dentro dunha expresión de fila.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Devolve unha árbore de sintaxe abstracta (AST) que representa o acceso á columna <code>columnName</code> da fila dentro dunha expresión de fila.


## Examples

### Example #1 
Crea un AST que representa o acceso da columna &#34;CustomerName&#34;.
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
