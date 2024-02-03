---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Повертає дерево абстрактного синтаксису (AST), яке представляє доступ до стовпця у виразі рядка.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Повертає дерево абстрактного синтаксису (AST), яке представляє доступ до стовпця "<code>columnName</code>" рядка у виразі рядка.


## Examples

### Example #1 
Повертає дерево абстрактного синтаксису, яке виражає доступ до стовпця &#34;CustomerName&#34;.
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
