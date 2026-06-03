---
title: Table.FromRecords
---

# Table.FromRecords


Chuyển đổi một danh sách bản ghi thành một bảng.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Chuyển đổi danh sách bản ghi cụ thể thành bảng.

-   `records`: Danh sách bản ghi cần chuyển đổi thành bảng.
-   `columns`: (Không bắt buộc) Danh sách tên cột của bảng hoặc loại bảng.
-   `missingField`: (Không bắt buộc) Chỉ định cách xử lý các trường bị thiếu trong một hàng. Sử dụng một trong các giá trị sau:
    -   `MissingField.Error`: Bất kỳ trường nào bị thiếu đều sẽ tạo ra lỗi (mặc định).
    -   `MissingField.UseNull`: Bất kỳ trường nào bị thiếu sẽ được đưa vào dưới dạng giá trị `null`.
      
    Sử dụng `MissingField.Ignore` trong tham số này sẽ tạo ra lỗi.


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
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
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


### Example #3
Tạo bảng chứa tên, chữ cái đầu tên đệm và họ của khách hàng từ các bản ghi được chỉ định. Nếu còn thiếu giá trị nào, hãy thay thế giá trị đó bằng `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
