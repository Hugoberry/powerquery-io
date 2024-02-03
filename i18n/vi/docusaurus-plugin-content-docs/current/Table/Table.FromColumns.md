---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Tạo một bảng từ danh sách cột và giá trị được chỉ định.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Tạo một bảng thuộc loại <code>columns</code> từ danh sách <code>lists</code> chứa các danh sách lồng nhau với các tên cột và giá trị.    Nếu một số cột có nhiều giá trị hơn các cột khác thì giá trị bị thiếu sẽ được điền bằng giá trị mặc định là 'giá trị null' nếu các cột có thể có giá trị rỗng.


## Examples

### Example #1 
Trả về một bảng từ danh sách tên khách hàng trong một danh sách. Mỗi giá trị trong mục danh sách khách hàng trở thành một giá trị hàng và mỗi danh sách trở thành một cột.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Tạo một bảng từ danh sách cột cho sẵn và danh sách tên cột.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Tạo một bảng với số cột mỗi hàng khác nhau. Giá trị hàng bị thiếu là null.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
