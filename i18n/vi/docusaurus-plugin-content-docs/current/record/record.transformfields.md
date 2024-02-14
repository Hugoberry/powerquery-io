---
title: Record.TransformFields
---

# Record.TransformFields


Trả về một bản ghi sau khi áp dụng các chuyển đổi được chỉ định.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Trả về một bản ghi sau khi áp dụng các chuyển đổi được chỉ định trong danh sách <code>transformOperations</code> cho <code>record</code>.    Có thể chuyển đổi một hoặc nhiều trường tại một thời gian cụ thể.      <div>Trong trường hợp một trường duy nhất được chuyển đổi thì <code>transformOperations</code> dự kiến là một danh sách có hai mục. Mục đầu tiên trong <code>transformOperations</code> chỉ định một tên trường và mục thứ hai trong <code>transformOperations</code> chỉ định hàm dùng để chuyển đổi. Ví dụ: <code>\{"Quantity", Number.FromText}</code></div>      <div>Trong trường hợp nhiều trường được chuyển đổi thì <code>transformOperations</code> dự kiến là một danh sách bao gồm các danh sách trong đó mỗi danh sách bên trong là một cặp tên trường và tác vụ chuyển đổi. Ví dụ: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Chuyển đổi trường &#34;Giá&#34; sang số.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
Chuyển đổi các trường &#34;OrderID&#34; và &#34;Price&#34; thành số.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
