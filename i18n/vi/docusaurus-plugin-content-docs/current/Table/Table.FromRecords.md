---
title: Table.FromRecords
---

# Table.FromRecords


## Description

Chuyển đổi một danh sách bản ghi thành một bảng.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Chuyển đổi <code>records</code>, một danh sách bản ghi, thành một bảng.


## Examples

### Example #1 
Tạo bảng từ bản ghi, sử dụng các tên trường bản ghi làm tên cột.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Tạo bảng từ bản ghi bằng các cột được nhập và chọt cột số.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
