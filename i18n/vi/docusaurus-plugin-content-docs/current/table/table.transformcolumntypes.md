---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Áp dụng (các) chuyển đổi loại có dạng \{ column, type \} bằng cách thức cụ thể.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Trả về một bảng khi áp dụng thao tác chuyển đổi cho các cột được chỉ định bằng ngôn ngữ tùy chọn.

-   `table`: Bảng nhập để chuyển đổi.
-   `typeTransformations`: Các loại chuyển đổi sẽ áp dụng. Định dạng cho một chuyển đổi đơn là \{ column name, type value \}. Có thể sử dụng danh sách các chuyển đổi để thay đổi loại của nhiều cột cùng một lúc. Nếu một cột không tồn tại, sẽ xảy ra lỗi.
-   `culture`: (Tùy chọn) Ngôn ngữ sẽ sử dụng khi chuyển đổi loại cột (ví dụ: "en-US"). Nếu một bản ghi được chỉ định cho `culture`, bản ghi đó có thể chứa các trường sau:
    -   `Culture`: Ngôn ngữ sẽ sử dụng khi chuyển đổi loại cột (ví dụ: "en-US").
    -   `MissingField`: Trong trường hợp một cột không tồn tại, sẽ xảy ra lỗi nếu trường này không cung cấp hành vi thay thế (ví dụ: `MissingField.UseNull` hoặc `MissingField.Ignore`).

Giá trị loại trong tham số `typeTransformations` có thể là `any`, tất cả các loại `number`, `text`, tất cả các loại `date`, `time`, `datetime`, `datetimezone` và `duration`, `logical` hoặc `binary`. Các loại `list`, `record`, `table` hoặc `function` không hợp lệ đối với tham số này.  
  
Đối với mỗi cột được liệt kê trong `typeTransformations`, phương pháp ".From" tương ứng với giá trị loại được chỉ định thường được dùng để thực hiện việc chuyển đổi. Ví dụ: nếu một giá trị loại `Currency.Type` được cung cấp cho một cột, thì hàm chuyển đổi `Currency.From` sẽ được áp dụng cho mỗi giá trị trong cột đó.


## Examples

### Example #1
Chuyển đổi các giá trị số trong cột đầu tiên thành giá trị văn bản.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
Chuyển đổi ngày trong bảng thành văn bản tiếng Pháp tương đương với chúng.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
Chuyển đổi ngày trong bảng thành văn bản tiếng Đức tương đương với nhau và các giá trị trong bảng thành tỷ lệ phần trăm.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
Áp dụng chuyển đổi với giá trị bản ghi cho `culture`.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
