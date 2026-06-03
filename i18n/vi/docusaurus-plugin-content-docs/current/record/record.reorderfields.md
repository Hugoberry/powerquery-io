---
title: Record.ReorderFields
---

# Record.ReorderFields


Sắp xếp lại các trường bản ghi để khớp với thứ tự danh sách tên trường.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Sắp xếp lại các trường của một bản ghi để khớp với thứ tự danh sách tên trường.

-   `record`: Bản ghi có chứa các trường cần sắp xếp lại.
-   `fieldOrder`: Danh sách chứa thứ tự mới của các trường cần áp dụng cho bản ghi. Các giá trị của trường được giữ nguyên, còn những trường không được liệt kê trong tham số này sẽ vẫn ở vị trí ban đầu.
-   `missingField`: Chỉ định hành động dự kiến cho các giá trị bị thiếu trong một hàng có chứa ít trường hơn dự kiến. Các giá trị sau là hợp lệ:
    -   `MissingField.Error`: (Mặc định) Cho biết rằng các trường bị thiếu sẽ gây ra lỗi. Nếu không nhập giá trị nào cho tham số `missingField`, thì giá trị này sẽ được dùng.
    -   `MissingField.Ignore`: Cho biết rằng nên bỏ qua các trường bị thiếu.
    -   `MissingField.UseNull`: Cho biết rằng nên thêm các trường bị thiếu vào dưới dạng giá trị `null`.


## Examples

### Example #1
Sắp xếp lại các trường trong bản ghi.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Sắp xếp lại một số trường trong bản ghi và thêm `null` cho bất kỳ trường nào bị thiếu.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
