---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

Trả về số lượng cột trong bảng.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

Trả về số lượng cột trong bảng <code>table</code>.


## Examples

### Example #1 
Tìm số lượng cột trong bảng.
```powerquery
Table.ColumnCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
