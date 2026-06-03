---
title: List.MaxN
---

# List.MaxN


Trả về (các) giá trị lớn nhất trong danh sách. Phải chỉ định số lượng giá trị trả về hoặc một điều kiện lọc.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Trả về giá trị lớn nhất trong danh sách được chỉ định. Sau khi các hàng được sắp xếp, có thể chỉ định tham số tùy chọn để lọc kết quả kỹ hơn.

-   `list`: Danh sách giá trị.
-   `countOrCondition`: Chỉ định số giá trị để trả về hoặc điều kiện lọc. Nếu giá trị được chỉ định là một số, hệ thống sẽ trả về danh sách gồm tối đa `countOrCondition` mục theo thứ tự giảm dần. Nếu giá trị được chỉ định là một điều kiện, danh sách trả về sẽ bao gồm tất cả các mục đáp ứng điều kiện đó.
-   `comparisonCriteria`: (Tùy chọn) Một hàm dùng để chuyển đổi các giá trị trước khi các giá trị này được so sánh. Nếu tham số này là `null`, các giá trị sẽ được so sánh mà không chuyển đổi.
-   `includeNulls`: (Tùy chọn) Cho biết có dùng các giá trị `null` trong danh sách khi xác định mục lớn nhất không. Giá trị mặc định là `true`.


## Examples

### Example #1
Tìm 5 giá trị cao nhất trong danh sách được chỉ định.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Tìm các từ có hơn 3 ký tự.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Tìm 3 ngày gần đây nhất trong danh sách ngày tháng của Đức.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
