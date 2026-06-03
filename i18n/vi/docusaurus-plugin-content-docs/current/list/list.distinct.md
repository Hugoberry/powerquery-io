---
title: List.Distinct
---

# List.Distinct


Trả về một danh sách giá trị đã được loại bỏ giá trị trùng lặp.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Trả về một danh sách chứa tất cả giá trị trong danh sách được chỉ định đã loại bỏ các giá trị trùng lặp. Nếu danh sách được chỉ định trống, kết quả sẽ là một danh sách trống.

-   `list`: Danh sách mà từ đó các giá trị riêng biệt được trích xuất.
-   `equationCriteria`: (Không bắt buộc) Chỉ định cách xác định trường hợp bằng nhau khi so sánh các giá trị. Tham số này có thể là một hàm chọn khóa, hàm so sánh hoặc danh sách chứa cả hàm chọn khóa và hàm so sánh.


## Examples

### Example #1
Loại bỏ các giá trị trùng lặp khỏi danh sách \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Từ đầu danh sách, chọn những loại trái cây có độ dài văn bản không trùng lặp với loại khác.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
Từ đầu danh sách, chọn những loại trái cây không trùng lặp (không phân biệt chữ hoa với chữ thường).
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Trích xuất các danh sách đầu tiên gồm những tên quốc gia không trùng lặp (không phân biệt chữ hoa với chữ thường) từ một danh sách. Đặt những danh sách được trích xuất vào các hàng của một bảng mới.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
