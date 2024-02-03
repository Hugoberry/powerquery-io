---
title: RowExpression.Column
---

# RowExpression.Column


## Description

返回表示对行表达式中列的访问权限的抽象语法树(AST)。


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

返回一个抽象语法树(AST)，该树表示对行表达式中行的列 <code>columnName</code> 的访问权限。


## Examples

### Example #1 
创建表示对列 &#34;CustomerName&#34; 的访问权限的 AST。
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
