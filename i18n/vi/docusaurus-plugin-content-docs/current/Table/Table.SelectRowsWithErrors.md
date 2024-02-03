---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Trả về một bảng chỉ có các hàng bị lỗi ít nhất một ô bị của bảng đầu vào. Nếu chỉ định danh sách cột thì chỉ các ô trong cột được chỉ định được kiểm tra lỗi.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Trả về một bảng chỉ có các hàng bị lỗi ít nhất một ô bị của bảng đầu vào. Nếu chỉ định danh sách cột thì chỉ các ô trong cột được chỉ định được kiểm tra lỗi.


## Examples

### Example #1 
Chọn tên của khách hàng có lỗi trong hàng.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
