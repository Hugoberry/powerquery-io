---
title: RowExpression.Column
---

# RowExpression.Column


Trả về một cây cú pháp trừu tượng biểu thị quyền truy nhập vào một cột trong biểu thức hàng.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Trả về một cây cú pháp trừu tượng (AST) biểu thị quyền truy nhập vào cột `columnName` của hàng trong một biểu thức hàng.


## Examples

### Example #1
Tạo một AST biểu thị truy cập cột "CustomerName".
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
