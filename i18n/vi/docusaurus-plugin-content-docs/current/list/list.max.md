---
title: List.Max
---

# List.Max


Trả về giá trị cực đại hoặc giá trị mặc định cho một danh sách trống.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Trả về mục lớn nhất trong danh sách hoặc giá trị mặc định tùy chọn nếu danh sách này trống.

-   `list`: Danh sách giá trị.
-   `default`: (Tùy chọn) Giá trị để trả về nếu danh sách trống.
-   `comparisonCriteria`: (Tùy chọn) Một hàm dùng để chuyển đổi các giá trị trước khi các giá trị này được so sánh. Nếu tham số này là `null`, các giá trị sẽ được so sánh mà không chuyển đổi.
-   `includeNulls`: (Tùy chọn) Cho biết có dùng các giá trị `null` trong danh sách khi xác định mục lớn nhất không. Giá trị mặc định là `true`.


## Examples

### Example #1
Tìm giá trị lớn nhất trong danh sách được chỉ định.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Tìm giá trị lớn nhất trong danh sách được chỉ định hoặc trả về -1 nếu danh sách này trống.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Tìm mục cuối cùng theo thứ tự bảng chữ cái trong danh sách các giá trị văn bản. Nếu danh sách này trống, trả về "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Tìm ngày tháng gần đây nhất trong danh sách ngày tháng của Đức. Nếu danh sách trống, trả về ngày 01/01/2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
