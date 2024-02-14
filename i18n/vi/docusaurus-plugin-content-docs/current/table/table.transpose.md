---
title: Table.Transpose
---

# Table.Transpose


Chuyển đổi cột thành hàng và hàng thành cột.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

Chuyển đổi cột thành hàng và hàng thành cột.


## Examples

### Example #1 
Chuyển đổi hàng của bảng chứa các cặp tên-giá trị thành cột.
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
