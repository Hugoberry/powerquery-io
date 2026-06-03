---
title: Record.SelectFields
---

# Record.SelectFields


Trả về một bản ghi chỉ chứa các trường được chỉ định.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Trả về một bản ghi chỉ bao gồm các trường được chỉ định trong danh sách `fields` từ đầu vào `record`.


## Examples

### Example #1
Chọn các trường "Mục" và "Giá" trong bản ghi.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
