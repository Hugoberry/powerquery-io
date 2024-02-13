---
title: RowExpression.Column
---

# RowExpression.Column


Devuelve un árbol de sintaxis abstracta (AST) que representa el acceso a una columna dentro de una expresión de fila.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Devuelve un árbol de sintaxis abstracta (AST) que representa el acceso a la columna <code>columnName</code> de la fila dentro de una expresión de fila.


## Examples

### Example #1 
Crea un AST que representa el acceso a la columna &#34;CustomerName&#34;.
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
