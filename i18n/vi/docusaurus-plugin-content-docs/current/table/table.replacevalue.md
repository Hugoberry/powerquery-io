---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Thay thế một giá trị bằng một giá trị khác trong các cột được chỉ định.


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

Thay thế bằng một giá trị mới trong các cột được chỉ định của bảng.

-   `table`: Bảng cần tìm kiếm.
-   `oldValue`: Giá trị cần được thay thế.
-   `newValue`: Giá trị thay thế.
-   `replacer`: Hàm thay thế để sử dụng. Hàm này có thể là `Replacer.ReplaceText` để thay thế văn bản gốc bằng văn bản mới, `Replacer.ReplaceValue` để thay thế giá trị gốc bằng giá trị mới hoặc một trình thay thế tùy chỉnh.
-   `columnsToSearch`: Danh sách chứa (các) cột cụ thể trong bảng để tìm kiếm giá trị cần thay thế.


## Examples

### Example #1
Thay thế văn bản "goodbye" bằng "world" trong cột B, chỉ khớp với toàn bộ giá trị.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
Thay thế văn bản "ur" bằng "or" trong cột B, khớp với bất kỳ phần nào của giá trị.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
Ẩn danh tên nhân viên Hoa Kỳ.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
Ẩn danh tất cả các cột của nhân viên Hoa Kỳ.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
