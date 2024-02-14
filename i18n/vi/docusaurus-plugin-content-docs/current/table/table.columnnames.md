---
title: Table.ColumnNames
---

# Table.ColumnNames


Trả về các tên cột ở dạng danh sách.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Trả về các tên cột trong bảng <code>table</code> ở dạng danh sách văn bản.


## Examples

### Example #1 
Tìm các tên cột của bảng.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
