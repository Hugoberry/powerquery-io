---
title: Table.RenameColumns
---

# Table.RenameColumns


Áp dụng (các) tác vụ đổi tên có dạng \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Thực hiện các tác vụ đổi tên cho sẵn đối với các cột trong bảng `table`. Thao tác thay thế `renames` bao gồm một danh sách có hai giá trị là tên cột cũ và tên cột mới, được cung cấp trong một danh sách. Nếu cột này không tồn tại thì lỗi sẽ xuất hiện, trừ phi tham số tùy chọn `missingField` chỉ định một giá trị thay thế (ví dụ: `MissingField.UseNull` hoặc `MissingField.Ignore`).


## Examples

### Example #1
Thay thế tên cột "CustomerNum" bằng "CustomerID" trong bảng.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Thay thế tên cột "CustomerNum" bằng "CustomerID" và "PhoneNum" bằng "Phone" trong bảng.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Thay thế tên cột "NewCol" bằng "NewColumn" trong bảng và bỏ qua nếu cột này không tồn tại.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
