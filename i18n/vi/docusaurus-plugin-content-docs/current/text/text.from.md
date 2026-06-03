---
title: Text.From
---

# Text.From


Tạo một giá trị văn bản từ giá trị cho sẵn.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Trả về dạng biểu diễn văn bản của một giá trị được chỉ định.

-   `value`: Giá trị cần chuyển đổi thành văn bản. Giá trị có thể là `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` hoặc `binary` value. Nếu giá trị cho sẵn là `null` thì hàm này sẽ trả về `null`.
-   `culture`: (Tùy chọn) Ngôn ngữ sẽ sử dụng khi chuyển đổi giá trị thành văn bản (ví dụ: "en-US").


## Examples

### Example #1
Tạo một giá trị văn bản từ số 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Tải văn bản tương đương với ngày và giờ được chỉ định.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Nhận văn bản tiếng Đức tương đương với ngày và giờ được chỉ định.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Nhận giá trị nhị phân từ văn bản được mã hóa dưới dạng thập lục phân và thay đổi giá trị về văn bản.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Tải các hàng trong bảng chứa dữ liệu cho Pháp và chuyển đổi ngày tháng thành văn bản bằng văn hóa Pháp.
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
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
