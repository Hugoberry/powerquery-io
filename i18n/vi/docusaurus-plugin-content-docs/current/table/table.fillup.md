---
title: Table.FillUp
---

# Table.FillUp


Phân bố giá trị của ô tới các ô có giá trị rỗng ở phía trên trong cột.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Trả về một bảng từ <code>table</code> được chỉ định trong đó giá trị của ô tiếp theo được phân bố tới các ô có giá trị rỗng ở phía trên trong <code>columns</code> được chỉ định.


## Examples

### Example #1 
Trả về một bảng có các giá trị null trong cột [Column2] được điền giá trị ở phía dưới chúng từ bảng.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
