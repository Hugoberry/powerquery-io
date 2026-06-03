---
title: Record.RenameFields
---

# Record.RenameFields


Áp dụng đổi tên từ một danh sách có dạng \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Trả về một bản ghi sau khi đổi tên trường trong thông tin đầu vào `record` thành tên trường mới được chỉ định trong danh sách `renames`. Để đổi tên nhiều lần, có thể sử dụng danh sách lồng nhau (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Đổi tên trường "Đơn giá" thành "Giá" từ bản ghi.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Đổi tên trường "Đơn giá" thành "Giá" và "OrderNum" thành "OrderID" từ bản ghi.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
