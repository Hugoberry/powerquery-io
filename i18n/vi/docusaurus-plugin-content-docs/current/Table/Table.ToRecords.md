---
title: Table.ToRecords
---

# Table.ToRecords


## Description

Chuyển đổi bảng thành danh sách bản ghi.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Details

Chuyển đổi bảng <code>table</code> thành danh sách bản ghi.


## Examples

### Example #1 
Chuyển đổi bảng thành danh sách bản ghi.
```powerquery
Table.ToRecords(
    Table.FromRows(
        {
            {1, "Bob", "123-4567"},
            {2, "Jim", "987-6543"},
            {3, "Paul", "543-7890"}
        },
        {"CustomerID", "Name", "Phone"}
    )
)
```

Result: 
```powerquery
{
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
}
```




## Category
Table.Conversions
