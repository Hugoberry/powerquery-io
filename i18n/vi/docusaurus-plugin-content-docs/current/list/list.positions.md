---
title: List.Positions
---

# List.Positions


Trả về một danh sách phần bù cho đầu vào.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Trả về một danh sách phần bù cho danh sách đầu vào được chỉ định.

-   `list`: Danh sách đầu vào.

Khi sử dụng `List.Transform` để thay đổi một danh sách thì danh sách vị trí có thể dùng để cấp quyền truy cập chuyển đổi đối với vị trí.


## Examples

### Example #1
Tìm phần bù của giá trị trong danh sách \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Tạo bảng gán ID cho từng khách hàng dựa trên vị trí của khách hàng trong danh sách.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
