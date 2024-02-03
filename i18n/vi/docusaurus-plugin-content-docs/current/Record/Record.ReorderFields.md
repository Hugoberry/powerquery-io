---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Sắp xếp lại (các) trường được chỉ định theo thứ tự mới.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Trả về một bản ghi sau khi phân loại lại các trường trong <code>record</code> theo thứ tự trường được chỉ định trong danh sách <code>fieldOrder</code>. Các giá trị trường được duy trì và các trường không được liệt kê trong <code>fieldOrder</code> được để lại ở vị trí ban đầu.


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




## Category
Record.Transformations
