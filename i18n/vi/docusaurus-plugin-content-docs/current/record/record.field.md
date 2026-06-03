---
title: Record.Field
---

# Record.Field


Trả về giá trị của trường được chỉ định trong bản ghi.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Trả về giá trị của `field` được chỉ định trong `record`. Nếu không tìm thấy trường thì lỗi sẽ xuất hiện.


## Examples

### Example #1
Tìm giá trị của trường "CustomerID" trong bản ghi.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
