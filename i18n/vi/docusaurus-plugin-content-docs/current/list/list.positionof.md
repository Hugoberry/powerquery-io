---
title: List.PositionOf
---

# List.PositionOf


Trả về (các) phần bù của một giá trị trong một danh sách.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Trả về phần bù mà giá trị được chỉ định xuất hiện trong danh sách. Trả về -1 nếu giá trị không xuất hiện.

-   `list`: Danh sách cần tìm kiếm.
-   `value`: Giá trị cần tìm trong danh sách.
-   `occurrence`: (Không bắt buộc) Lần xuất hiện cụ thể cần báo cáo. Giá trị này có thể là `Occurrence.First`, `Occurrence.Last` hoặc `Occurrence.All`. Nếu không có `occurrence` nào được chỉ định, `Occurrence.First` sẽ được sử dụng.
-   `equationCriteria`: (Không bắt buộc) Chỉ định cách xác định trường hợp bằng nhau khi so sánh các giá trị. Tham số này có thể là một hàm chọn khóa, hàm so sánh hoặc danh sách chứa cả hàm chọn khóa và hàm so sánh.


## Examples

### Example #1
Tìm vị trí trong danh sách \{1, 2, 3\} mà tại đó giá trị 3 xuất hiện.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Tìm vị trí của tất cả các ngày thuộc năm 2022 trong danh sách.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Tìm vị trí xuất hiện cuối cùng của từ “dog” trong danh sách, không phân biệt chữ hoa/thường.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
Tìm vị trí trong danh sách nằm trong 2 đơn vị so với số 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
