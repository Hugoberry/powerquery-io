---
title: RowExpression.Column
---

# RowExpression.Column


Retorna un arbre de sintaxi abstracta (AST) que representa l'accés a una columna dins d'una expressió de fila.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Retorna un arbre de sintaxi abstracta (AST) que representa l'accés a la columna `columnName` de la fila dins d'una expressió de fila.


## Examples

### Example #1
Crea un AST que representa l'accés a la columna "CustomerName".
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
