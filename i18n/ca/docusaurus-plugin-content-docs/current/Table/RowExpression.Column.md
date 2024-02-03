---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Retorna un arbre de sintaxi abstracta (AST) que representa l&#39;accés a una columna dins d&#39;una expressió de fila.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Retorna un arbre de sintaxi abstracta (AST) que representa l'accés a la columna <code>columnName</code> de la fila dins d'una expressió de fila.


## Examples

### Example #1 
Crea un AST que representa l&#39;accés a la columna &#34;CustomerName&#34;.
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
