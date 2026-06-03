---
title: RowExpression.Column
---

# RowExpression.Column


Retourne une arborescence de syntaxe abstraite (AST) qui représente l’accès à la colonne dans une expression de ligne.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Retourne une arborescence de syntaxe abstraite (AST) qui représente l’accès à la colonne `columnName` de la ligne dans une expression de ligne.


## Examples

### Example #1
Crée un AST représentant l'accès de la colonne « CustomerName ».
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
