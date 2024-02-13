---
title: Table.FillDown
---

# Table.FillDown


Phân bố giá trị của ô trước thành các ô có giá trị rỗng ở dưới trong cột.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Trả về một bảng từ <code>table</code> được chỉ định trong đó giá trị của ô trước được phân bố tới các ô có giá trị rỗng ở dưới trong <code>columns</code> được chỉ định.


## Examples

### Example #1 
Trả về một bảng có các giá trị null trong cột [Place] được điền giá trị ở trên chúng từ bảng.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
