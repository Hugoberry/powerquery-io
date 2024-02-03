---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Trả về một bản ghi chỉ chứa các trường được chỉ định.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Trả về một bản ghi chỉ bao gồm các trường được chỉ định trong danh sách <code>fields</code> từ đầu vào <code>record</code>.


## Examples

### Example #1 
Chọn các trường &#34;Mục&#34; và &#34;Giá&#34; trong bản ghi.
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
