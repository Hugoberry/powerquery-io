---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Mở rộng một cột bản ghi thành các cột với từng giá trị.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Cho `column` bản ghi trong đầu vào `table`, hãy tạo một bảng với một cột cho mỗi trường trong bản ghi. Có thể tùy chọn chỉ định `newColumnNames` để đảm bảo tên dành cho các cột trong bảng mới là duy nhất.

-   `table`: Bảng gốc với cột bản ghi sẽ mở rộng.
-   `column`: Cột sẽ mở rộng.
-   `fieldNames`: Danh sách các trường sẽ mở rộng thành các cột trong bảng.
-   `newColumnNames`: Danh sách tên cột sẽ đặt cho cột mới. Tên cột mới không được trùng lặp với bất kỳ cột nào trong bảng mới.


## Examples

### Example #1
Mở rộng cột \[a\] trong bảng `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` thành 3 cột "aa", "bb" và "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
