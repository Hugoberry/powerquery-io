---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Trả về một bảng có các cột theo thứ tự được chỉ định.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Trả về một bảng từ đầu vào `table` với các cột theo thứ tự do `columnOrder` chỉ định. Các cột không được chỉ định trong danh sách sẽ không được sắp xếp lại. Nếu cột này không tồn tại thì lỗi sẽ xuất hiện, trừ phi tham số tùy chọn `missingField` chỉ định một giá trị thay thế (ví dụ: `MissingField.UseNull` hoặc `MissingField.Ignore`).


## Examples

### Example #1
Chuyển đổi thứ tự của các cột \[Phone\] và \[Name\] trong bảng.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Chuyển đổi thứ tự của các cột \[Phone\] và \[Address\] hoặc sử dụng "MissingField.Ignore" trong bảng. Điều này khoongn thay đổi bảng vì cột \[Address\] không tồn tại.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
