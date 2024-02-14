---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Cho một cột danh sách trong một bảng, hãy tạo một bản sao của một hàng cho mỗi giá trị trong danh sách.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Cho <code>table</code> trong đó <code>column</code> là danh sách giá trị, hãy tách danh sách này thành một hàng cho mỗi giá trị. Giá trị trong các cột khác được sao chép trong từng hàng mới được tạo.


## Examples

### Example #1 
Tách cột danh sách [Name] trong bảng.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
