---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Trả về một cây cú pháp trừu tượng biểu thị quyền truy nhập vào một cột trong biểu thức hàng.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Trả về một cây cú pháp trừu tượng (AST) biểu thị quyền truy nhập vào cột <code>columnName</code> của hàng trong một biểu thức hàng.


## Examples

### Example #1 
Tạo một AST biểu thị truy cập cột &#34;CustomerName&#34;.
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
