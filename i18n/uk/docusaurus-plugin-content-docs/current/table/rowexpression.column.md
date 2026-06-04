---
title: RowExpression.Column
---

# RowExpression.Column


Повертає дерево абстрактного синтаксису (AST), яке представляє доступ до стовпця у виразі рядка.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Повертає дерево абстрактного синтаксису (AST), яке представляє доступ до стовпця "`columnName`" рядка у виразі рядка.


## Examples

### Example #1
Повертає дерево абстрактного синтаксису, яке виражає доступ до стовпця "CustomerName".
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
