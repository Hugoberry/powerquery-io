---
title: RowExpression.From
---

# RowExpression.From


Trả về cây cú pháp trừu tượng (AST) cho phần nội dung của hàm.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Trả về cây cú pháp trừu tượng (AST) cho nội dung của `function`, được chuẩn hóa thành *biểu thức hàng*:

-   Hàm phải là lamda đối số 1.
-   Tất cả các tham chiếu tới tham số hàm được thay thế bằng `RowExpression.Row`.
-   Tất cả tham chiếu đến cột được thay bằng `RowExpression.Column(columnName)`.
-   AST sẽ được đơn giản hóa để chỉ chứa các nút thuộc các loại:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Sẽ xuất hiện lỗi nếu không thể trả về biểu thức hàng AST cho nội dung của `function`.  
  
Hàm này giống với `ItemExpression.From`.


## Examples

### Example #1
Trả về AST cho nội dung của hàm `each [CustomerID] = "ALFKI"`.
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction
