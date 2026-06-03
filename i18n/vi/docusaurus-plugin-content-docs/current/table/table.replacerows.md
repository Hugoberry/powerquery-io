---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Thay thế phạm vi hàng được chỉ định bằng (các) hàng được cung cấp.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Thay thế số lượng hàng được chỉ định `count` trong đầu vào `table` bằng `rows` được chỉ định bắt đầu sau `offset`. Tham số `rows` là danh sách bản ghi.

-   `table`: Bảng nơi thực hiện thay thế.
-   `offset`: Số lượng hàng sẽ bỏ qua trước khi thực hiện thay thế.
-   `count`: Số lượng hàng sẽ thay thế.
-   `rows`: Danh sách các bản ghi hàng sẽ chèn vào `table` tại vị trí do `offset` chỉ định.


## Examples

### Example #1
Bắt đầu tại vị trí 1, thay thế 3 hàng.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
