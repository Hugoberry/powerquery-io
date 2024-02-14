---
title: RowExpression.Column
---

# RowExpression.Column


row 式内の行の列へのアクセスを表す抽象構文ツリー (AST) を返します。


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

row 式内の行の列 <code>columnName</code> へのアクセスを表す抽象構文ツリー (AST) を返します。


## Examples

### Example #1 
列 &#34;CustomerName&#34; のアクセスを表す AST を作成します。
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
