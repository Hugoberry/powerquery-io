---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Returns an abstract syntax tree (AST) that represents access to a column within a row expression.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Returns an abstract syntax tree (AST) that represents access to column <code>columnName</code> of the row within a row expression.


## Examples

### Example #1 
Creates an AST representing access of column &#34;CustomerName&#34;.
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
