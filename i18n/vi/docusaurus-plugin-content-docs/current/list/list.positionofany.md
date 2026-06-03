---
title: List.PositionOfAny
---

# List.PositionOfAny


Trả về phần bù đầu tiên của một giá trị trong danh sách.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Trả về phần bù mà một mục từ danh sách giá trị được chỉ định xuất hiện trong danh sách. Trả về -1 nếu không tìm thấy lần xuất hiện nào.

-   `list`: Danh sách cần tìm kiếm.
-   `values`: Danh sách các giá trị cần tìm trong danh sách gốc.
-   `occurrence`: (Không bắt buộc) Lần xuất hiện cụ thể cần báo cáo. Giá trị này có thể là `Occurrence.First`, `Occurrence.Last` hoặc `Occurrence.All`. Nếu không có `occurrence` nào được chỉ định, `Occurrence.First` sẽ được sử dụng.
-   `equationCriteria`: (Không bắt buộc) Chỉ định cách xác định trường hợp bằng nhau khi so sánh các giá trị. Tham số này có thể là một hàm chọn khóa, hàm so sánh hoặc danh sách chứa cả hàm chọn khóa và hàm so sánh.


## Examples

### Example #1
Tìm vị trí đầu tiên trong danh sách \{1, 2, 3\} mà tại đó giá trị 2 hoặc 3 xuất hiện.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Tìm vị trí của tất cả các ngày thuộc năm 2022 hoặc 2023 trong danh sách.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Tìm vị trí xuất hiện cuối cùng của từ “dog” hoặc “cat” trong danh sách, không phân biệt chữ hoa/thường.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Tìm vị trí bất kỳ trong danh sách nằm trong 2 đơn vị so với số 17 hoặc 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
