---
title: RowExpression.Column
---

# RowExpression.Column


Devolve unha árbore de sintaxe abstracta (AST) que representa o acceso a unha columna dentro dunha expresión de fila.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Devolve unha árbore de sintaxe abstracta (AST) que representa o acceso á columna `columnName` da fila dentro dunha expresión de fila.


## Examples

### Example #1
Crea un AST que representa o acceso da columna "CustomerName".
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
