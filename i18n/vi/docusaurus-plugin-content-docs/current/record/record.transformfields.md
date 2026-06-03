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

Trả về một bản ghi sau khi áp dụng các chuyển đổi được chỉ định trong danh sách `transformOperations` cho `record`. Có thể chuyển đổi một hoặc nhiều trường tại một thời gian cụ thể.

Trong trường hợp một trường duy nhất được chuyển đổi thì `transformOperations` dự kiến là một danh sách có hai mục. Mục đầu tiên trong `transformOperations` chỉ định một tên trường và mục thứ hai trong `transformOperations` chỉ định hàm dùng để chuyển đổi. Ví dụ: `{"Quantity", Number.FromText}`

Trong trường hợp nhiều trường được chuyển đổi thì `transformOperations` dự kiến là một danh sách bao gồm các danh sách trong đó mỗi danh sách bên trong là một cặp tên trường và tác vụ chuyển đổi. Ví dụ: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Chuyển đổi trường "Giá" sang số.
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
Chuyển đổi các trường "OrderID" và "Price" thành số.
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
