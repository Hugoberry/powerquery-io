---
title: Table.AddColumn
---

# Table.AddColumn


Thêm một cột có tên được chỉ định. Giá trị được tính bằng hàm chọn được chỉ định với một hàng được lấy làm dữ liệu đầu vào.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Remarks

Thêm một cột có tên <code>newColumnName</code> vào bảng <code>table</code>. Các giá trị dành cho cột được tính bằng hàm chọn được chỉ định <code>columnGenerator</code> với mỗi hàng được lấy làm dữ liệu đầu vào.


## Examples

### Example #1 
Thêm một cột số có tên &#34;TotalPrice&#34; vào bảng với mỗi giá trị là tổng của cột [Giá] và cột [Vận chuyển].
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
