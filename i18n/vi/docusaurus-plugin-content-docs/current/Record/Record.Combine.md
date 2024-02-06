---
title: Record.Combine
---

# Record.Combine


Kết hợp các bản ghi trong danh sách cho sẵn.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Kết hợp các bản ghi trong danh sách cho sẵn <code>records</code>. Nếu <code>records</code> chứa giá trị không phải là bản ghi thì một lỗi được trả về.


## Examples

### Example #1 
Tạo bản ghi kết hợp từ các những bản ghi.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
