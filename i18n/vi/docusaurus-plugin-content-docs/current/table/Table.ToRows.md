---
title: Table.ToRows
---

# Table.ToRows


Tạo một danh sách lồng chứa các giá trị hàng từ một bảng.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

Tạo một danh sách chứa các danh sách lồng nhau từ bảng <code>table</code>.  Mỗi mục danh sách là một danh sách bên trong chứa các giá trị hàng.


## Examples

### Example #1 
Tạo một danh sách chứa các giá trị hàng từ bảng.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
