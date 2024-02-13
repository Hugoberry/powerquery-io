---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Trả về một bảng có các hàng bị lỗi ít nhất một ô bị loại bỏ khỏi bảng đầu vào. Nếu chỉ định danh sách cột thì chỉ các ô trong cột được chỉ định được kiểm tra lỗi.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Trả về một bảng có các hàng bị lỗi ít nhất một ô bị loại bỏ khỏi bảng đầu vào. Nếu chỉ định danh sách cột thì chỉ các ô trong cột được chỉ định được kiểm tra lỗi.


## Examples

### Example #1 
Xóa giá trị lỗi từ hàng đầu tiên.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
