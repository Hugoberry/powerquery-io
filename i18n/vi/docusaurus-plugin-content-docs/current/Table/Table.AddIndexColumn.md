---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


## Description

Chắp thêm một cột có các giá trị vị trí rõ ràng.


## Syntax

```powerquery
Table.AddIndexColumn(
    table as table,
    newColumnName as text,
    optional initialValue as number,
    optional increment as number,
    optional columnType as type
) as table
```


## Details

Chắp thêm một cột có tên <code>newColumnName</code> vào <code>table</code> với các giá trị vị trí rõ ràng.    Một giá trị tùy chọn, <code>initialValue</code>, giá trị chỉ mục ban đầu. Giá trị tùy chọn <code>increment</code> chỉ định số lượng tăng mỗi giá trị chỉ mục.


## Examples

### Example #1 
Thêm một cột chỉ mục có tên &#34;chỉ mục&#34; vào bảng.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 0],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 1],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 2],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 3]
})
```


### Example #2 
Thêm một cột chỉ mục có tên &#34;chỉ mục&#34;, bắt đầu tại giá trị 10 và tăng theo số gia là 5, vào bảng.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index",
    10,
    5
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 10],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 15],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 20],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 25]
})
```




## Category
Table.Transformation
