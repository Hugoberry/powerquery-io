---
title: RowExpression.Column
---

# RowExpression.Column


Devolve uma árvore de sintaxe abstrata (AST) que representa o acesso à coluna numa expressão de linha.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Devolve uma árvore de sintaxe abstrata (AST) que representa o acesso à coluna <code>columnName</code> da linha numa expressão de linha.


## Examples

### Example #1 
Cria um AST que representa acesso da coluna &#34;NomedoCliente&#34;.
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
