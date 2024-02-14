---
title: Table.ToColumns
---

# Table.ToColumns


Tạo một danh sách chứa các danh sách lồng nhau bao gồm các giá trị cột từ bảng.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

Tạo một danh sách chứa các danh sách lồng nhau từ bảng <code>table</code>.  Mỗi mục danh sách là một danh sách bên trong chứa các giá trị cột.


## Examples

### Example #1 
Tạo một danh sách chứa các giá trị cột từ bảng.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
