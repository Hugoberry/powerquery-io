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

Retourne une arborescence de syntaxe abstraite (AST) qui représente l’accès à la colonne <code>columnName</code> de la ligne dans une expression de ligne.


## Examples

### Example #1 
Crée un AST représentant l&#39;accès de la colonne &#34; CustomerName &#34;.
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
