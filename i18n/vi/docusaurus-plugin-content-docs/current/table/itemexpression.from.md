---
title: ItemExpression.From
---

# ItemExpression.From


Trả về cây cú pháp trừu tượng (AST) cho phần nội dung của hàm.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Trả về cây cú pháp trừu tượng (AST) cho nội dung của `function`, được chuẩn hóa thành *biểu thức mục*:

-   Hàm phải là lamda đối số 1.
-   Tất cả các tham chiếu tới tham số hàm được thay thế bằng `ItemExpression.Item`.
-   AST sẽ được đơn giản hóa để chỉ chứa các nút thuộc các loại:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Lỗi sẽ xuất hiện nếu không thể trả về biểu thức mục AST cho nội dung của `function`.  
  
Hàm này giống với `RowExpression.From`.


## Examples

### Example #1
Trả về AST cho nội dung của hàm `each _ <> null`.
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction
