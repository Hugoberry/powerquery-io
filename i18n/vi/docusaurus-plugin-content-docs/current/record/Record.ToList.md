---
title: Record.ToList
---

# Record.ToList


Trả về danh sách giá trị chứa giá trị trường của bản ghi nhập vào.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Trả về danh sách giá trị chứa giá trị trường từ đầu vào <code>record</code>.


## Examples

### Example #1 
Trích xuất giá trị trường từ bản ghi.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
