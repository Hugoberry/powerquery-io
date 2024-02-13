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

Trả về cây cú pháp trừu tượng (AST) cho phần nội dung của <code>function</code>, được chuẩn hóa thành một <i>biểu thức mục</i>:<ul>  <li>Hàm phải là hàm lambda 1 đối số.</li>  <li>Tất cả các tham chiếu tới tham số của hàm được thay thế bằng <code>ItemExpression.Item</code>.</li>  <li>AST sẽ được đơn giản hóa để chỉ chứa nút thuộc các loại:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Sẽ xuất hiện lỗi nếu không thể trả về biểu thức mục AST cho phần nội dung của <code>function</code>.<br />


## Examples

### Example #1 
Trả về AST cho nội dung của hàm &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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
