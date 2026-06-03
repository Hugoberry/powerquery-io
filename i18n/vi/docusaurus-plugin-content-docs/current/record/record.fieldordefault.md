---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Trả về giá trị của trường được chỉ định trong bản ghi hoặc giá trị mặc định nếu không tìm thấy trường.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Trả về giá trị của trường được chỉ định `field` trong bản ghi `record`. Nếu không tìm thấy trường thì `defaultValue` tùy chọn được trả về.


## Examples

### Example #1
Tìm giá trị của trường "Điện thoại" trong bản ghi hoặc trả về null nếu không giá trị này tồn tại.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Tìm giá trị của trường "Điện thoại" trong bản ghi hoặc trả về giá trị mặc định nếu giá trị này không tồn tại.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
