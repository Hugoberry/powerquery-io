---
title: Table.FromRows
---

# Table.FromRows


Tạo bảng từ danh sách giá trị hàng và cột tùy chọn


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Tạo bảng từ danh sách <code>rows</code>, trong đó mỗi thành phần của danh sách là một danh sách bên trong có chứa giá trị cột của một hàng. Danh sách tùy chọn tên cột, loại bảng hoặc số cột có thể được cung cấp cho <code>columns</code>.


## Examples

### Example #1 
Trả về một bảng với cột [CustomerID] có các giá trị \{1, 2}, cộ [Name] có các giá trị \{&#34;Bob&#34;, &#34;Jim&#34;} và cột [Phone] có các giá trị \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Trả về một bảng với cột [CustomerID] có các giá trị \{1, 2}, cột [Name] có các giá trị \{&#34;Bob&#34;, &#34;Jim&#34;} và cột [Phone] có các giá trị \{&#34;123-4567&#34;, &#34;987-6543&#34;} trong đó [CustomerID] là loại số còn [Name] và [Phone] là loại văn bản.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
