---
title: Table.FromList
---

# Table.FromList


Chuyển đổi một danh sách thành một bảng bằng cách áp dụng hàm tách được chỉ định cho mỗi mục trong danh sách.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Remarks

Chuyển đổi danh sách <code>list</code> thành một bảng bằng cách áp dụng hàm tách tùy chọn <code>splitter</code> cho mỗi mục trong danh sách. Theo mặc định, danh sách được giả định là danh sách giá trị văn bản được tách bằng dấu phẩy. <code>columns</code> tùy chọn có thể là số lượng cột, danh sách cột hoặc TableType. <code>default</code> và <code>extraValues</code> tùy chọn cũng có thể được chỉ định.


## Examples

### Example #1 
Tạo bảng từ danh sách bằng trình phân tách mặc định.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
Tạo bảng từ danh sách bằng trình phân tách tùy chỉnh.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Tạo bảng từ danh sách bằng trình phân tách Record.FieldValues.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
