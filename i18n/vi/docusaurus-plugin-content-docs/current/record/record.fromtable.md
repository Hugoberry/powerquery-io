---
title: Record.FromTable
---

# Record.FromTable


Tạo bản ghi từ bảng có dạng \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Trả về bản ghi từ bảng bản ghi `table` chứa tên trường và tên giá trị `{[Name = name, Value = value]}`. Lỗi sẽ xuất hiện nếu tên trường không phải là duy nhất.


## Examples

### Example #1
Tạo bản ghi từ bảng có dạng Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
