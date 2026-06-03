---
title: List.ContainsAll
---

# List.ContainsAll


Cho biết nơi một danh sách bao gồm tất cả các giá trị trong một danh sách khác.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Cho biết liệu danh sách này có chứa mọi giá trị của một danh sách khác hay không. Trả về `true` nếu tìm thấy mọi giá trị trong danh sách này, nếu không, sẽ trả về `false`.

-   `list`: Danh sách cần tìm kiếm.
-   `values`: Danh sách các giá trị cần tìm kiếm trong danh sách đầu tiên.
-   `equationCriteria`: (Tùy chọn) Trình so sánh được dùng để xác định xem hai giá trị có bằng nhau hay không.


## Examples

### Example #1
Xác định xem danh sách \{1, 2, 3, 4, 5\} có chứa 3 và 4 hay không.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Xác định xem danh sách \{1, 2, 3, 4, 5\} có chứa 5 và 6 hay không.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Xác định xem danh sách này có chứa cả chó và ngựa hay không, khi không phân biệt chữ hoa/thường.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Xác định xem danh sách này có chứa các ngày 8 tháng 4 năm 2022 và ngày 6 tháng 7 năm 2021 hay không.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
