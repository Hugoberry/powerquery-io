---
title: Table.SplitColumn
---

# Table.SplitColumn


Tách các cột được chỉ định thành một tập hợp cột bổ sung bằng hàm phân tách được chỉ định.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Tách các cột được chỉ định thành một tập hợp cột bổ sung bằng hàm phân tách được chỉ định.

-   `table`: Bảng chứa cột cần tách.
-   `sourceColumn`: Tên của cột cần tách.
-   `splitter`: Hàm phân tách được dùng để tách cột (ví dụ: `Splitter.SplitTextByDelimiter` hoặc `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Có thể là danh sách tên cột mới cần tạo hoặc số lượng cột mới.
-   `default`: Ghi đè giá trị được sử dụng khi không có đủ giá trị phân tách để điền vào tất cả các cột mới. Giá trị mặc định cho tham số này là `null`.
-   `extraColumns`: Chỉ định hành động cần thực hiện nếu giá trị phân tách có thể nhiều hơn số lượng cột mới. Bạn có thể truyền một giá trị kiểu liệt kê `ExtraValues.Type` qua tham số này. Giá trị mặc định là `ExtraValues.Ignore`.


## Examples

### Example #1
Tách cột tên thành tên và họ.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Tách cột tên thành tên và họ, sau đó đổi tên các cột mới.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Tách cột tên thành tên và họ, đổi tên các cột mới và điền "-No Entry-" (Không có mục nhập) vào bất kỳ chỗ trống nào.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Tách cột tên thành tên và họ, sau đó đổi tên các cột mới. Vì giá trị có thể nhiều hơn số lượng cột có sẵn, hãy định dạng cột họ thành một danh sách chứa mọi giá trị xuất hiện sau tên.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
