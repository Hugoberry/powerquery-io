---
title: RowExpression.Column
---

# RowExpression.Column


Retorna uma árvore de sintaxe abstrata (AST) que representa o acesso a uma coluna em uma expressão de linha.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Retorna uma árvore de sintaxe abstrata (AST) que representa o acesso à coluna `columnName` da linha em uma expressão de linha.


## Examples

### Example #1
Cria um AST representando o acesso da coluna "CustomerName".
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
