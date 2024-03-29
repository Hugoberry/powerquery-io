---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Giáng cấp các tiêu đề cột thành hàng giá trị đầu tiên.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Giáng cấp các tiêu đề cột (tức là tên cột) thành hàng giá trị đầu tiên. Tên cột mặc định là "Column1", "Column2", v.v.


## Examples

### Example #1 
Giáng cấp hàng giá trị đầu tiên trong bảng.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
