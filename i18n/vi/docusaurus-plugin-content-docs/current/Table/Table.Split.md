---
title: Table.Split
---

# Table.Split


## Description

Tách bảng đã chỉ định thành một danh sách các bảng sử dụng kích thước trang được chỉ định.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Tách <code>table</code> thành danh sách của các bảng, nơi phần tử đầu tiên của danh sách là một bảng chứa hàng <code>pageSize</code> đầu tiên từ    bảng nguồn, phần tử tiếp theo của danh sách là một bảng chứa hàng <code>pageSize</code> tiếp theo từ bảng nguồn, v.v.


## Examples

### Example #1 
Tách bảng gồm năm bản ghi thành các bảng trong đó mỗi bảng có hai bản ghi.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
