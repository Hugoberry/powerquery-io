---
title: Record.AddField
---

# Record.AddField


Thêm trường vào bản ghi.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

Thêm trường vào bản ghi <code>record</code> khi được cho sẵn tên của trường là <code>fieldName</code> và giá trị <code>value</code>.


## Examples

### Example #1 
Thêm trường Địa chỉ vào bản ghi.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
