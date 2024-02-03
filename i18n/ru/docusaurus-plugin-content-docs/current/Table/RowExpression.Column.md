---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Возвращает абстрактное синтаксическое дерево (AST), представляющее доступ к столбцу в выражении строки.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Возвращает абстрактное синтаксическое дерево (AST), представляющее доступ к столбцу <code>columnName</code> строки в выражении строки.


## Examples

### Example #1 
Создает AST, представляющий доступ к столбцу CustomerName.
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
