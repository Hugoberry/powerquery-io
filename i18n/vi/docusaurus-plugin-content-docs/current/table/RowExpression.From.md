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

Trả về cây cú pháp trừu tượng (AST) cho phần nội dung của <code>function</code>, được chuẩn hóa thành một <i>biểu thức hàng</i>:<ul>  <li> Hàm phải là hàm lambda 1 đối số.</li>  <li>Tất cả các tham chiếu tới tham số của hàm được thay thế bằng <code>RowExpression.Row</code>.</li>  <li>Tất cả các tham chiếu tới cột được thay thế bằng <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>AST sẽ được đơn giản hóa để chỉ chứa nút thuộc các loại:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Sẽ xuất hiện lỗi nếu không thể trả về biểu thức hàng AST cho phần nội dung của <code>function</code>.<br />


## Examples

### Example #1 
Trả về AST cho nội dung của hàm &lt;code&gt;từng [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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
