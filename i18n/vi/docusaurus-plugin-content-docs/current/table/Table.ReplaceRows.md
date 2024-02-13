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

Thay thế số lượng hàng được chỉ định <code>count</code> trong đầu vào <code>table</code> bằng <code>rows</code> được chỉ định bắt đầu sau <code>offset</code>. Tham số <code>rows</code> là danh sách bản ghi.    <ul>       <li><code>table</code>: Bảng nơi thực hiện thay thế.</li>       <li><code>offset</code>: Số lượng hàng sẽ bỏ qua trước khi thực hiện thay thế.</li>       <li><code>count</code>: Số lượng hàng sẽ thay thế.</li>       <li><code>rows</code>: Danh sách các bản ghi hàng sẽ chèn vào <code>table</code> tại vị trí do <code>offset</code> chỉ định.</li>    </ul>


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
