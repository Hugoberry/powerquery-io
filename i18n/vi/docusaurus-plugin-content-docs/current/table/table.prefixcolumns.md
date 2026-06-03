---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Trả về một bảng trong đó tất cả các cột đều đã được thêm tiền tố là văn bản cho sẵn.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Trả về một bảng có tất cả tên cột từ `table` cho sẵn đều được thêm tiền tố là văn bản `prefix` cho sẵn cùng với một dấu chấm ở dạng `prefix.ColumnName`.


## Examples

### Example #1
Thêm tiền tố "MyTable" cho các cột trong bảng.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
